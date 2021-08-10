const url = "https://swapi.dev/api/people";

test();

async function test() {
    let response = await fetch(url);
    let data = await response.json();
    let html = '';

    data.results.forEach(character => {
        console.log(character);
        let element = `<div>
        <h1>${character.name}</h1>
        <h2>Films</h2>
        <ul class="films">
            <li>Film 1</li>
            <li>Film 2</li>
        </ul>  
        </div>`;

        html += element;
    });

    let container = document.querySelector('.main-container');
    container.innerHTML = html;
}
