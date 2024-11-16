import axios from 'axios';
import { Country } from '../types/Country';
import { DetailedCountry } from '../types/DetailedCountry';

export const index = async (): Promise<Country[]> => {
    try {
        const baseUrl = process.env.BASE_URL_NAGER_API;
        if (!baseUrl) {
            throw new Error('BASE_URL_NAGER_API is not defined');
        }
        const response = await axios.get(`${baseUrl}/AvailableCountries`) as { data: Country[] };
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch data from the API');
    }
};


export const show = async (countryCode: string): Promise<DetailedCountry> => {
    try {
        const nagerBaseUrl = process.env.BASE_URL_NAGER_API;
        const countriesBaseUrl = process.env.BASE_URL_COUNTRIES_API;
        if (!nagerBaseUrl || !countriesBaseUrl) {
            throw new Error('BASE_URL_NAGER_API or BASE_URL_COUNTRIES_API is not defined');
        }
        const borderCountries = await axios.get(`${nagerBaseUrl}/CountryInfo/${countryCode}`) as any;
        const populationData = await axios.post(`${countriesBaseUrl}/countries/population`, {country: borderCountries.data.commonName}) as any;
        const flagImage = await axios.post(`${countriesBaseUrl}/countries/flag/images`, {country: borderCountries.data.commonName}) as any;
        return {
            borderCountries: borderCountries.data.borders,
            populationData: populationData.data.data.populationCounts,
            flagImage: flagImage.data.data.flag
        }
    } catch (error: any) {
        console.error(error);
        throw new Error('Failed to fetch data from the API');
    }
}