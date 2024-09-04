const sugerencia = document.querySelector(".sugerencia")
const btnSugerencia = document.querySelector(".btn-sugerencia")
const borrarSugerencia = document.querySelector(".x")
const formularioS = document.querySelector("#formulario-S")
const Nombre = document.querySelector("#Nombre");
const Mensaje = document.querySelector("#Mensaje");
const CorreoS = document.querySelector("#Correo-S");


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

function registrarSugerencia(e){
  e.preventDefault();
    let sugerencias = {
        userNombre: Nombre.value,
        userCorreo: CorreoS.value,
        userMensaje: Mensaje.value,
    }
    localStorage.setItem("sugerencias", JSON.stringify(sugerencias));
        window.location = "./registro.html"
}

formularioS.addEventListener("submit",registrarSugerencia)
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
    window.location = "../vistas/inicio-sesión.html"
}

formulario.addEventListener("submit",registrarUser)