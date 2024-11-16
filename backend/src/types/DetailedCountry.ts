export interface DetailedCountry {
    borderCountries: Border[];
    populationData: PopulationData[];
    flagImage: string;
}

export type Border = {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
}

export type PopulationData = {
    year: number;
    value: number;
    sex: string;
    reliability: string; 
}