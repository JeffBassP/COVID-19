
const defaultURL = 'https://api.covid19api.com/';

const zeroPadding = (number) => {
    return String(number).padStart(2, '0');
}

const listCountries = async () => {
    const URL = `${defaultURL}countries`
    const paises = await axios.get(URL);

    return paises;

}

const detailsCountry = async () => {
    const URL = `${defaultURL}summary`;
    const result = await axios.get(URL);


    const countries = result.data;

    return countries.Countries;
}

const worldCases = async () => {
    const URL = `${defaultURL}summary`;
    const result = await axios.get(URL);

    const world = result.data;

    return world.Global
}


