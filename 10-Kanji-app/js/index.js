const sugerencia = document.querySelector(".sugerencia")
const btnSugerencia = document.querySelector(".btn-sugerencia")
const borrarSugerencia = document.querySelector(".x")

function enviarSugerencia() {
    if (sugerencia.style.display === "none") {
      sugerencia.style.display = "block";
    } else {
      sugerencia.style.display = "none";
    }
  }

function cerrarSugerencia(){
    sugerencia.style.display = "none";
}

btnSugerencia.addEventListener("click", enviarSugerencia)
borrarSugerencia.addEventListener("click", enviarSugerencia)

const saludo = document.querySelector(".saludo");

let nombreUser = JSON.parse(localStorage.getItem("user"));

saludo.innerHTML = `Hola ${nombreUser.userN}`