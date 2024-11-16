"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.index = void 0;
const axios_1 = __importDefault(require("axios"));
const index = async () => {
    try {
        const baseUrl = process.env.BASE_URL_NAGER_API;
        if (!baseUrl) {
            throw new Error('BASE_URL_NAGER_API is not defined');
        }
        const response = await axios_1.default.get(`${baseUrl}/AvailableCountries`);
        return response.data;
    }
    catch (error) {
        throw new Error('Failed to fetch data from the API');
    }
};
exports.index = index;
const show = async (countryCode) => {
    try {
        const nagerBaseUrl = process.env.BASE_URL_NAGER_API;
        const countriesBaseUrl = process.env.BASE_URL_COUNTRIES_API;
        if (!nagerBaseUrl || !countriesBaseUrl) {
            throw new Error('BASE_URL_NAGER_API or BASE_URL_COUNTRIES_API is not defined');
        }
        const borderCountries = await axios_1.default.get(`${nagerBaseUrl}/CountryInfo/${countryCode}`);
        const populationData = await axios_1.default.post(`${countriesBaseUrl}/countries/population`, { country: borderCountries.data.commonName });
        const flagImage = await axios_1.default.post(`${countriesBaseUrl}/countries/flag/images`, { country: borderCountries.data.commonName });
        return {
            borderCountries: borderCountries.data.borders,
            populationData: populationData.data.data.populationCounts,
            flagImage: flagImage.data.data.flag
        };
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data from the API');
    }
};
exports.show = show;
