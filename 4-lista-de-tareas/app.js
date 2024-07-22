const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const main = document.querySelector("#main");
const btnBorrar = document.querySelector(".borrar");

function crear (){
const tarea = document.createElement("div");
tarea.classList.add("lista");
tarea.innerText = input.value
main.appendChild(tarea);

const quit = document.createElement("button");
quit.innerText = `<i class="fa-regular fa-circle-xmark"></i>`;
quit.classList.add("quit");
tarea.appendChild(quit)
}

function BorrarPantalla(){
    main.innerHTML = "";
    n =1;
}

btn.addEventListener("click",crear);
btnBorrar.addEventListener("click", BorrarPantalla);