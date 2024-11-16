import Link from "next/link";

interface CountryProps {
    countryName: string;
    countryCode: string;
}

const Country = ({countryName, countryCode}: CountryProps) => {
    return (
        <Link href={`/countries/${countryCode}`}>
            <div className="text-blue-500 hover:text-blue-700">
                {countryName} - {countryCode}
            </div>
        </Link>
    )
}

export default Country;