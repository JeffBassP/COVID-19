const loadCountries = async () => {

    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = createDropdown();
    const { data } = await listCountries();
    const dropdownContent = document.getElementById('dropdown-content');
    const countryListed = [];
    data.forEach(element => { countryListed.push(element) });
    
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


    const showDetails = createDetails(pais);
    // detailsContainer.insertAdjacentHTML('beforeend', showDetails);
    const detailsContainer = document.getElementById('details-container').innerHTML = showDetails;

}

const loadWorld = async () => {
    const world = await worldCases();



    const showDetails = createDivWorld(world);
    //detailsContainer.insertAdjacentHTML("beforebegin", showDetails);
    const detailsContainer = document.getElementById('details-container').innerHTML = showDetails;
}

