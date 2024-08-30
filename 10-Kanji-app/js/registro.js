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


const Username = document.querySelector("#Username");
const Password = document.querySelector("#Password");
const formulario = document.querySelector("#formulario");
const Correo = document.querySelector("#Correo");
const Apellidos = document.querySelector("#Apellidos");

function registrarUser(e){
    e.preventDefault();
    let user = {
        userN: Username.value,
        userP: Password.value,
        userC: Correo.value,
        userA: Apellidos.value,
    }
    
    localStorage.setItem("user", JSON.stringify(user));   
    formulario.reset()
}

formulario.addEventListener("submit",registrarUser)