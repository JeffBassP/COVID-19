
const formateNumber = (Number) =>{
const formatedNumber = Number.toLocaleString('pt-BR');
return formatedNumber;
}
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
    <span class="results">Total de recuperados:<br>${formateNumber(resultado.TotalRecovered)}</span>
    </div>
    <div class='boxdetails'>
    <span class="results">Data da ultima atualização:<br>${dateFormated}</span>
    </div>`;

    return div;
} 


createDivWorld = (world) => {
    const infoWorld = world;
    const div = `  
                    <img src="https://www.thoughtco.com/thmb/IxJUppm1UaJGoTMLjC54-clZpc8=/4961x2791/smart/filters:no_upscale()/world-in-geographic-projection-true-colour-satellite-image-99151124-58b9cc3e5f9b58af5ca7578d.jpg" class="flag"></img>
                    <div class='boxdetails'>
                     <span class="results">Mundo</span>
                    </div>
                    <div class='boxdetails'>
                     <span class="results">Casos confirmados:<br>${formateNumber(infoWorld.TotalConfirmed)}</span>
                    </div>
                    <div class='boxdetails'>
                     <span class="results">Mortes:<br>${formateNumber(infoWorld.TotalDeaths)}</span>
                    </div>
                    <div class='boxdetails'>
                     <span class="results">Recuperados:<br>${formateNumber(infoWorld.TotalRecovered)}</span>
                    </div>`
    return div;
}

