# Project Setup and Execution

## Environment Variables

### Frontend
```sh
Create a `.env` file in the `frontend` directory with the following content:
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

### Backend
Create a `.env` file in the `backend` directory with the following content:
```sh
BASE_URL_NAGER_API=https://date.nager.at/api/v3
BASE_URL_COUNTRIES_API=https://countriesnow.space/api/v0.1
PORT=3001
```
## Installation

Install the dependencies for both services by running the following command in each service directory:
```sh
npm install -f
```
Running the Services
To run both services, navigate to the respective service directory and execute:

### Backend Routes
The backend provides the following routes:

GET /countries: Returns all available countries with their names and codes.
GET /countries/:countryCode: Returns a detailed country object with the following structure:

```sh
export interface DetailedCountry {
    borderCountries: Border[];
    populationData: PopulationData[];
    flagImage: string;
    countryName: string;
    countryCode: string;
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
```

Technologies Used
<br/>
Frontend: Next.js, React, Tailwind CSS
<br/>
Backend: Node.js, Express, Axios

<sub>Note: Some countries may return errors when fetching data due to the provided API not returning the expected results.</sub>
