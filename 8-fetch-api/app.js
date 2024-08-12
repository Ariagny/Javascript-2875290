const container = document.querySelector(".container")

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(respuesta => respuesta.json())
  .then(datos => {
    datos.forEach(element => {
        let box = document.createElement('div')
        box.classList.add("box");
        container.appendChild(box)

        const title = document.createElement("h1")
        title.innerText = `Name: ${element.name}`
        box.appendChild(title)

        const text = document.createElement("p")
        text.innerText = `Userame: ${element.username}`
        box.appendChild(text)
    });
  })