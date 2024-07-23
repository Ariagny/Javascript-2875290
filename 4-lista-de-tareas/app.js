const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const main = document.querySelector("#main");
const btnBorrar = document.querySelector(".borrar");
let n = 0;

function crear (){
const tarea = document.createElement("div");
tarea.classList.add("lista");
tarea.innerText = input.value
main.appendChild(tarea);
input.value = ""


const tach = document.createElement("button");
tach.innerHTML = `<i class="fa-regular fa-circle" data="realizado" id="0"></i>`;
tach.classList.add("tach");
tarea.appendChild(tach);


const quit = document.createElement("button");
quit.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
quit.classList.add("quit");
tarea.appendChild(quit);
}

function BorrarPantalla(){
    main.innerHTML = "";
    n =1;
}

function BorrarElemento(e){

    if(e.target.classList[1] === "fa-circle-xmark"){
        main.removeChild(e.target.parentElement.parentElement);
    }
}

 function tacharElemento(e){
    console.log(e.target.parentElement.parentElement.children)
    
    if(e.target.classList[1] === "fa-circle", n === 0){
        e.target.parentElement.parentElement.style.textDecorationLine = "line-through";
        n = 1
    }else if (e.target.classList[1] === "fa-circle", n === 1){
        e.target.parentElement.parentElement.style.textDecorationLine = "none";
        n = 0
    }
} 

btn.addEventListener("click",crear);
btnBorrar.addEventListener("click", BorrarPantalla);
main.addEventListener("click", BorrarElemento);
 main.addEventListener("click", tacharElemento); 