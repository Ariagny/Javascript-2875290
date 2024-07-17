 const gato = document.querySelector(".gato");
const titulo = document.querySelector(".titulo");
const luna = document.querySelector(".boton");
const btn = document.querySelector(".btn");

function moverLuna (){
    luna.style.animationName = "luna"
    gato.style.animationName = "cat"
    titulo.style.animationName = "tit"
    }

btn.addEventListener("click",moverLuna);
 