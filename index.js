const url = "https://swapi.dev/api/people";

getCharacters();

async function getCharacters() {
    let response = await fetch(url);
    let data = await response.json();
    let html = '';

    for (const character of data.results) {       
        let element = `<div>
            <h1>${character.name}</h1>
            <h2>Planet</h2>
            <p>Planet Earth</p>  
        </div>`;

        html += element;
    }

    let container = document.querySelector('.main-container');
    container.innerHTML = html;
}
