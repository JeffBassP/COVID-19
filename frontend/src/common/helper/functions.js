

const createList = ({
    Country,
    ISO2,
   
}) => {
   
    const div = `
    <div class='country' onclick='loadDetails("${ISO2}")'>${Country}</div>
                   `;
                  
     return div;
}

const createDetails = (pais) =>{

    const resultado = pais;
    
    const data = resultado.Date.replace(/-/g , "/");
 
    const dateFormated = data.slice(0, 10).split('/').reverse().join('/');
 
    
    const div = `
    <img src="https://www.countryflags.io/${resultado.CountryCode}/flat/64.png" class="flag"></img> 
    <br>
    <div class='boxdetails'>

    <span class="results">País:<br>${resultado.Country}</span>
    </div>
    <div class='boxdetails'>
    <span class="results">Casos confirmados:<br>${resultado.TotalConfirmed}</span>
    </div>
    <div class='boxdetails'>
    <span class="results">Mortes:<br>${resultado.TotalDeaths}</span>
    </div>
    <div class='boxdetails'>
    <span class="results">Total de recuperados:<br>${resultado.TotalRecovered}</span>
    </div>
    <div class='boxdetails'>
    <span class="results">Data da ultima atualização:<br>${dateFormated}</span>
    </div>`;

    return div;
} 
