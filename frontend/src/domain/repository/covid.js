//const axios = require('axios');

const defaultURL = 'https://api.covid19api.com/';

const zeroPadding = (number) =>{
    return String(number).padStart(2 , '0');
}
 
const listCountries = async () => {
    const URL = `${defaultURL}countries`
    const paises = await axios.get(URL);
    
    return paises;

}

const detailsCountry = async(country) =>{
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const endDate = `${year}-${zeroPadding(month)}-${day}`;

    const countryToday = `total/country/${country}/status/confirmed?from=2020-01-01T00:00:00Z&to=${endDate}T00:00:00Z`;
    const URL = `${defaultURL}${countryToday}`;

    const resultCountry = await axios.get(URL);
    const casesPerDay = resultCountry.data;
    const cases =  casesPerDay[casesPerDay.length -1].Cases - casesPerDay[0].Cases;  
    const dateFormated = endDate.split('-').reverse().join("-");
    const casesCountry = [country, cases, dateFormated];
return casesCountry;

}



//detailsCountry('morocco').then(console.log);
