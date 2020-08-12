const loadCountries = async () => {
    const { data } = await listCountries();
    const dropdownContent = document.getElementById('dropdown-content');
    const countryListed = [];
    data.forEach(element => countryListed.push(element));

    countryListed.forEach(item => {
        const countries = createList(item);
        dropdownContent.insertAdjacentHTML('beforeend', countries);
    });

}

const loadDetails = async (CountryCode) => {
    const countries = await detailsCountry();



    let pais = [];
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].CountryCode == CountryCode) {
            pais = countries[i];
        }
    }
    const detailsContainer = document.getElementById('details-container')

    const showDetails = createDetails(pais);
    detailsContainer.insertAdjacentHTML('beforeend', showDetails);


}

loadWorld = async () => {
    const world = await worldCases();

    const detailsContainer = document.getElementById('details-container')

    const showDetails = createDivWorld(world);
    detailsContainer.insertAdjacentHTML("beforeend", showDetails);
}

loadCountries();