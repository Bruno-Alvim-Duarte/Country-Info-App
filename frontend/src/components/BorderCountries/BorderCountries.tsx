import Country from '../Country/Country';

interface BorderCountriesProps {
  borderCountries: BorderCountry[];
  countryName: string;
}

interface BorderCountry {
  commonName: string;
  countryCode: string;
}

const BorderCountries = ({ borderCountries, countryName }: BorderCountriesProps) => {
  return (
    <>
      <div className="text-center">
        <div className="text-xl">
          Countries that border
          {countryName}
        </div>
        <div className="text-sm italic">
          OBS: you can click on each country to see detailed infos
        </div>
      </div>
      <ul>
        {borderCountries.map((borderCountry: any) => (
          <Country
            key={borderCountry.countryCode}
            countryName={borderCountry.commonName}
            countryCode={borderCountry.countryCode}
          />
        ))}
      </ul>
    </>
  );
};

export default BorderCountries;
