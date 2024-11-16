'use client';
import useCountries from '@/client/hooks/useCountries';
import Country from '@/components/Country/Country';
import ICountry from '@/interfaces/ICountry';

const CountriesPage = () => {
  const { countries, loading } = useCountries();

  return loading ? (
    <div>
      <div>Loading...</div>
    </div>
  ) : (
    <div className="p-6 flex flex-col items-center gap-5">
      <div className="text 2xl font-bold">Countries List</div>
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
