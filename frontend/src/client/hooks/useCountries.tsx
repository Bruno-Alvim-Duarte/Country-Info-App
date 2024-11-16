import { useCallback, useEffect, useMemo, useState } from 'react';
import ICountry from '@/interfaces/ICountry';
import api from '../services/api';

const useCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCountries = useCallback(async () => {
    try {
      const response = await api.get('/countries');
      setCountries(response.data);
    } catch (e) {
      console.error('erro ao buscar os países', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const data = useMemo(
    () => ({
      countries,
      loading,
    }),
    [countries, loading]
  );

  return data;
};

export default useCountries;
