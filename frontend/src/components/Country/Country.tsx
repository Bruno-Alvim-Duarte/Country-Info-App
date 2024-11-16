interface CountryProps {
    countryName: string;
    countryCode: string;
}

const Country = ({countryName, countryCode}: CountryProps) => {
    return (
        <div>
            {countryName} - {countryCode}
        </div>
    )
}

export default Country;