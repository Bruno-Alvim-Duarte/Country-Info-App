'use client';
import useCountry from '@/client/hooks/useCountry';
import Country from '@/components/Country/Country';
import PopulationChart from '@/components/PopulationChart/PopulationChart';
import Image from 'next/image';

const CountryPage = () => {
  const { countryData, loading } = useCountry();
  return loading ? (
    <div>
      <div>Loading...</div>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-4 p-[2%]">
      <Image src={countryData.flagImage} alt="flag" width={100} height={100} />
      <div className="text-center">
        <div className="text-xl">{countryData.countryName}</div>
        <div className="text-sm italic">{countryData.countryCode}</div>
      </div>
      <div className="text-center">
        <div className="text-xl">
          Countries that border
          {countryData.countryName}
        </div>
        <div className="text-sm italic">
          OBS: you can click on each country to see detailed infos
        </div>
      </div>
      <ul>
        {countryData.borderCountries.map((borderCountry: any) => (
          <Country
            key={borderCountry.countryCode}
            countryName={borderCountry.commonName}
            countryCode={borderCountry.countryCode}
          />
        ))}
      </ul>
      <PopulationChart populationData={countryData.populationData} />
    </div>
  );
};

export default CountryPage;
