const loadCoutries = async () => {
    const { data } = await listCountries();
    const dropdownContent = document.getElementById('dropdown-content');
    const countryListed = [];
    data.forEach(element => countryListed.push(element));

    

    console.log(countryListed);
    countryListed.forEach(item => {
        const countries = createList(item);
        dropdownContent.insertAdjacentHTML('beforeend', countries);
    });

}

const loadDetails = async(country) => {
    const details = await detailsCountry(country);
    const detailsContainer = document.getElementById('details-container');

    console.log(details);
    const showDetails = createDetails(details);
    detailsContainer.insertAdjacentHTML('beforeend', showDetails);
}

loadCoutries();
