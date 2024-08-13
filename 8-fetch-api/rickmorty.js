const container = document.querySelector(".container")
const  circle = document.querySelector(".circle")

let e = 0

let url = "https://rickandmortyapi.com/api/character"
fetch(url)
.then(response => response.json())
.then(data => {
 data.results.forEach(element => {
    console.log(data.results)
    const card = document.createElement('div')
        card.classList.add("card");
        container.appendChild(card)

        card.innerHTML = ` 
            <img src="${element.image}" width= "200px">
            <div class="info">
            <h1>${element.name}</h1>
            <div class="section">
            <div class="circle"></div>
            <span class="estado">${element.status} - ${element.species} </span>
            </div>
            <div class="detalle">
                <p><strong>Última ubicación conocida:</strong> la guarida de Worldender</p>
                <p><strong>Visto por primera vez en:</strong> Vindicadores 3: El regreso de Worldender</p>
            </div>
        </div>
        </div>
        `
        container.appendChild(card)
 });
}
)

function estado (e){}