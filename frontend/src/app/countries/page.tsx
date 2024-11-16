    "use client"
    import useCountries from "@/client/hooks/useCountries";
    import Country from "@/components/Country/Country";
    import ICountry from "@/interfaces/ICountry";

    const CountriesPage = () => {
        const { countries, loading} = useCountries();

        return loading ? (
            <div>
                <div>Loading...</div>
            </div>
        ) : (
            <div className="p-6">
                <div className="text 2xl font-bold">Countries List</div>
                    {countries.map((country: ICountry) => (
                        <Country key={country.countryCode} countryName={country.name} countryCode={country.countryCode} />
                    ))} 
            </div>
        )
    }

    export default CountriesPage