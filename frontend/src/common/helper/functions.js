
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
                    <br>
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
const div = `
                
                <div class="dropdown">
                    <button class="dropbtn">Lista de Paises </button>

                    <div class="dropdown-content" id="dropdown-content"> 

                    </div>
                </div>`;
return div;
}

const createCovid = () =>{
    const div = `
    <div class="show-text">
    <h1>O que é COVID-19</h1>
    <span>
    Os coronavírus são uma grande família de vírus comuns em muitas espécies diferentes de animais, 
    incluindo camelos, gado, gatos e morcegos. Raramente, os coronavírus que infectam animais podem infectar pessoas, como exemplo do MERS-CoV e SARS-CoV. Recentemente, em dezembro de 2019, 
    houve a transmissão de um novo coronavírus (SARS-CoV-2), o qual foi identificado em Wuhan na China e causou a COVID-19, sendo em seguida disseminada e transmitida pessoa a pessoa.
    
    A COVID-19 é uma doença causada pelo coronavírus, denominado SARS-CoV-2, que apresenta um espectro clínico variando de infecções assintomáticas a quadros graves.
     De acordo com a Organização Mundial de Saúde, a maioria (cerca de 80%) dos pacientes com COVID-19 podem ser assintomáticos ou oligossintomáticos (poucos sintomas), 
     e aproximadamente 20% dos casos detectados requer atendimento hospitalar por apresentarem dificuldade respiratória, dos quais aproximadamente 5% podem necessitar de suporte ventilatório.</span>
     </div>
     
     
     <div class="show-covid">
     <h1>Quais são os sintomas</h1>
    <span>
    Os sintomas da COVID-19 podem variar de um resfriado, a uma Síndrome Gripal-SG (presença de um quadro respiratório agudo, caracterizado por, pelo menos dois dos seguintes sintomas: sensação febril ou 
    febre associada a dor de garganta, dor de cabeça, tosse, coriza) até uma pneumonia severa. Sendo os sintomas mais comuns:
    </span>
    <ul class="ul-covid">
    <li class="listaCovid">Tosse</li>
    <li class="listaCovid">Febre</li>
    <li class="listaCovid">Coriza</li>
    <li class="listaCovid">Dor de garganta</li>
    <li class="listaCovid">Dificuldade para respirar</li>
    <li class="listaCovid">Perda de olfato (anosmia)</li>
    <li class="listaCovid">Alteração do paladar (ageusia)</li>
    <li class="listaCovid">Distúrbios gastrintestinais (náuseas/vômitos/diarreia)</li>
    <li class="listaCovid">Cansaço (astenia)</li>
    <li class="listaCovid">Diminuição do apetite (hiporexia)</li>
    <li class="listaCovid">Dispnéia ( falta de ar)</li>
    </ul>
     </div>
     <div class="show-covid">
    <h1>Como é transmitido</h1>
    <span>
    A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio de:
    <span>
    <br>
    <ul class="ul-covid">
    <li class="listaCovid">Toque do aperto de mão contaminadas;</li>
    <li class="listaCovid">Gotículas de saliva;</li>
    <li class="listaCovid">Espirro;</li>
    <li class="listaCovid">Tosse;</li>
    <li class="listaCovid">Catarro;</li>
    <li class="listaCovid">Objetos ou superfícies contaminadas, como celulares, mesas, talheres,
     maçanetas, brinquedos, teclados de computador etc.</li>
    </div>  `;

     return div;
}
const createAbout = () =>{
    const div = `
    <div class="show-text">
    <span>
    Este site foi criado a pedido da escola Arbyte, afim de avaliar o conhecimento adquirido no 
    decorrer do curso.
    O site foi feito usando JavaScript e CSS e a leitura de API a partir do site 
    <a href:"https://api.covid19api.com/">covid19api.com</a>.

    </span>
    </div>`;

    return div;
}