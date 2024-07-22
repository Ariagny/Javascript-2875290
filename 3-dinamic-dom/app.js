const listaColores = document.querySelector("#listaColores");
const btnCrear = document.querySelector("#btnCrear");
const main = document.querySelector("#main");
const btnBorrar = document.querySelector("#btnBorrar");
let n = 1;

function crear (){
const ball = document.createElement("div");
const equis = document.createElement("button");

equis.innerText = "X";
equis.classList.add("equis")

ball.classList.add("pelotica");
ball.style.backgroundColor = listaColores.value
ball.innerText = n++;
ball.appendChild(equis);

main.appendChild(ball);
}

function BorrarPantalla(){
    main.innerHTML = "";
    n =1;
}

function BorrarElemento(e){
    if(e.target.innerText == "X"){
        main.removeChild(e.target.parentElement);
    }
}

function tacharElemento(e){
    e.target.style.textDecorationLine = "line-through"
}

btnCrear.addEventListener("click", crear);
btnBorrar.addEventListener("click", BorrarPantalla);
main.addEventListener("click", BorrarElemento);
main.addEventListener("click", tacharElemento);