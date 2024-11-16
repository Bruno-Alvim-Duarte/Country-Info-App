'use client';
import useCountry from '@/client/hooks/useCountry';
import BorderCountries from '@/components/BorderCountries/BorderCountries';
import PopulationChart from '@/components/PopulationChart/PopulationChart';
import Image from 'next/image';
import { FaSpinner } from 'react-icons/fa6';

const CountryPage = () => {
  const { countryData, loading } = useCountry();
  return loading ? (
    <div className="flex flex-col items-center mt-5">
      <FaSpinner className="animate-spin w-8 h-8 text-3xl text-foreground" />
    </div>
  ) : (
    <div className="flex flex-col items-center gap-4 p-[2%]">
      <div className="flex flex-col items-center bg-slate-700 rounded p-5">
        <Image src={countryData.flagImage} alt="flag" width={100} height={100} />
        <div className="text-center">
          <div className="text-xl">{countryData.countryName}</div>
          <div className="text-sm italic">{countryData.countryCode}</div>
        </div>
      </div>
      {countryData.borderCountries.length > 0 ? (
        <BorderCountries
          borderCountries={countryData.borderCountries}
          countryName={countryData.countryName}
        />
      ) : (
        <div className="flex flex-col items-center bg-slate-700 rounded p-5">
          <div className="text-xl">No border countries found</div>
        </div>
      )}
      <PopulationChart populationData={countryData.populationData} />
    </div>
  );
};

export default CountryPage;
