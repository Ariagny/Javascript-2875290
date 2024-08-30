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


//inicio de sesion

function validarUsuario (e){
    e.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem("user"));
    console.log(currentUser.userN);
    console.log(currentUser.userP);

console.log(Boolean(Username.value === currentUser.userN));
console.log(Boolean(Password.value === currentUser.userP));

if (Username.value === currentUser.userN && Password.value === currentUser.userP){
    window.location = "../index.html"
}else {
    console.log("Sigue intentando")
}

formulario.reset()
}

formulario.addEventListener("submit", validarUsuario)