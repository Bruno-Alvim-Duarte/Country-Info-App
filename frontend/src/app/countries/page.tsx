'use client';
import useCountries from '@/client/hooks/useCountries';
import Country from '@/components/Country/Country';
import ICountry from '@/interfaces/ICountry';
import { FaSpinner } from 'react-icons/fa6';

const CountriesPage = () => {
  const { countries, loading } = useCountries();

  return loading ? (
    <div className="flex flex-col items-center mt-5">
      <FaSpinner className="animate-spin w-8 h-8 text-3xl text-foreground" />
    </div>
  ) : (
    <div className="p-6 flex flex-col items-center gap-5">
      <div className="text text-3xl font-bold">Countries List</div>
      <div className="text text-xl italic">
        Please select the country wich you want to see detailed information
      </div>
      <div className="flex flex-wrap max-w-[80%] gap-3">
        {countries.map((country: ICountry) => (
          <Country
            key={country.countryCode}
            countryName={country.name}
            countryCode={country.countryCode}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesPage;
