
const formateNumber = (number) =>{
const formatedNumber = number.toLocaleString('pt-BR');
return formatedNumber;
}


const formateDate = (date) =>{
const createDate = date.replace(/-/g , "/");
const dateformated = createDate.slice(0, 10).split('/').reverse().join('/');
return dateformated;
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
    
    const data = resultado.Date;
 
    const div = `
    <img src="https://www.countryflags.io/${resultado.CountryCode}/flat/64.png" class="flag"></img> 
    <br>
    <div class='boxdetails'>

    <span class="results">País:<br>${resultado.Country}</span>
    </div>
    <div class='boxdetails'>
    <span class="results">Casos confirmados:<br>${formateNumber(resultado.TotalConfirmed)}</span>
    </div>
    <div class='boxdetails'>
    <span class="results">Mortes:<br>${formateNumber(resultado.TotalDeaths)}</span>
    </div>
    <div class='boxdetails'>
    <span class="results">Total de recuperados:<br>${formateNumber(resultado.TotalRecovered)}</span>
    </div>
    <div class='boxdetails'>
    <span class="results">Data da ultima atualização:<br>${formateDate(data)}</span>
    </div>`;

    return div;
} 


const createDivWorld = (world) => {
    const infoWorld = world;
    const div = `  
                    <img src="https://www.thoughtco.com/thmb/IxJUppm1UaJGoTMLjC54-clZpc8=/4961x2791/smart/filters:no_upscale()/world-in-geographic-projection-true-colour-satellite-image-99151124-58b9cc3e5f9b58af5ca7578d.jpg" class="flag"></img>
                    <div class='boxdetails'>
                     <span class="results">Mundo</span></br>
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

const createDropdown = () =>{
const div = `<div class="dropdown">
<button class="dropbtn">Lista de Paises </button>

 <div class="dropdown-content" id="dropdown-content"> 

 </div>
</div>`;
return div;
}