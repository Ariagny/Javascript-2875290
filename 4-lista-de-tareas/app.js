const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const main = document.querySelector("#main");

function crear (){
const tarea = document.createElement("div");
tarea.classList.add("lista");
tarea.innerText = input.value
main.appendChild(tarea)
}

btn.addEventListener("click",crear);
