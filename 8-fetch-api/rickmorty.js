const container = document.querySelector(".container")
const  circle = document.querySelector(".circle")


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
            <div class="circle "${element.status === 'Alive' ? "green": "red"}></div>
            <span class="estado">${element.status} - ${element.species} </span>
            </div>
            <div class="detalle">
                <p><strong>Última ubicación conocida:</strong><br>${element.location.name}</p>
                <p><strong>Visto por primera vez en:</strong><br>${element.origin.name}</p>
            </div>
        </div>
        </div>
        `
        container.appendChild(card)

       /*  function estado (){
            if (element.status === "Alive"){
              circle.style.ackground = "Green";
            }else if (element.status === "Dead"){
              circle.style.background = "Red";
            }else{
              circle.style.background = "#616161";
            }
          }

          estado() */
 });
}
)


