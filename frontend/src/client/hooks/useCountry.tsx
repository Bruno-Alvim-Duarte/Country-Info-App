import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import api from '../services/api';

const useCountry = () => {
  const pathname = usePathname();
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCountryData, setSelectedCountryData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const countryCode = pathname.split('/')[2];

    if (countryCode) {
      setSelectedCountry(countryCode);
    } else {
      setSelectedCountry('');
    }
  }, [pathname]);

  useEffect(() => {
    const fetchCountryData = async () => {
      if (selectedCountry) {
        try {
          const countryData = await api.get(`/countries/${selectedCountry}`);
          setSelectedCountryData(countryData.data);
          console.log('countryData', countryData);
        } catch (e) {
          console.error('error during fetch the country', e);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchCountryData();
  }, [selectedCountry]);

  const data = useMemo(
    () => ({
      pathname,
      countryData: selectedCountryData,
      loading,
    }),
    [pathname, selectedCountryData, loading]
  );

  return data;
};

export default useCountry;
