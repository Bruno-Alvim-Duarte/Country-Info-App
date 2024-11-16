"use client";
import useCountry from "@/client/hooks/useCountry";
import Country from "@/components/Country/Country";
import PopulationChart from "@/components/PopulationChart/PopulationChart";
import Image from "next/image";

const CountryPage = () => {
    const { countryData, loading } = useCountry();
    return loading ? (
        <div>
            <div>Loading...</div>
        </div>
    ) : (
        <div>
            <Image src={countryData.flagImage} alt="flag" width={100} height={100} />
            <div>{countryData.countryName}</div>
            <div>{countryData.countryCode}</div>
            <div>Countries that border {countryData.countryName}</div>
            <ul>
                {countryData.borderCountries.map((borderCountry: any) => (
                    <Country key={borderCountry.countryCode} countryName={borderCountry.commonName} countryCode={borderCountry.countryCode} />
                ))}
            </ul>
            <PopulationChart populationData={countryData.populationData} />
        </div>
    );
}

export default CountryPage;