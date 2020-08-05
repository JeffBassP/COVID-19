

const createList = ({
    Country,
    Slug,
   
}) => {
   
    const div = `
    <div class='country' onclick='loadDetails("${Slug}")'>${Country}</div>
                   `;
                  
     return div;
}

const createDetails = (details) =>{
    const div = `<span>${details}</span>`;

    return div;
}
