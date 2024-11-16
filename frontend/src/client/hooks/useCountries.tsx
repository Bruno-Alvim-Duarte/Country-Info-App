import { useCallback, useEffect, useMemo, useState } from "react";
import ICountry from "@/interfaces/ICountry";
import axios from "axios";

const useCountries = () => {
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCountries = useCallback(async() => {
        try {
            const response = await axios.get('http://localhost:3001/countries');
            console.log('response', response)
            setCountries(response.data);
        } catch (e) {
            console.error("erro ao buscar os países", e)
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    const data = useMemo(() => ({
        countries,
        loading
    }), [countries, loading]);

    return data;
}

export default useCountries;