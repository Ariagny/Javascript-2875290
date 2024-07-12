const fondo = document.querySelector('.container');
const sol = document.querySelector('.sol');
const sol2 = document.querySelector('.guia')
const nube1 = document.querySelector(".uno");
const nube2 = document.querySelector(".dos");
const nube3 = document.querySelector(".tres");
const nube4 = document.querySelector(".cuatro");

function noche (){
fondo.style.backgroundColor = "blue"
sol.style.backgroundColor = "white"
}

function moverSol (){
sol.style.animation = "solMover 5s linear"
}

function movernub (){
nube1.style.animation = "moverNub1 5s linear"
nube2.style.animation = "moverNub2 5s linear"
nube3.style.animation = "moverNub3 5s linear"
nube4.style.animation = "moverNub4 5s linear"
}

fondo.addEventListener("click", noche);
sol2.addEventListener("click", moverSol);
nube1.addEventListener("click", movernub);