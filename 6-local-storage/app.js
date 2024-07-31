/* let nombre = "Jose"
let items = ["uno","fruta", "cuatro"]
let pelicula =     {
    id: 2,
    imagen: 'https://i.ytimg.com/vi/d51lAHNbeAM/sddefault.jpg',
    nombre: "You're Special",
    artista: 'NF',
    genero: 'Pop-rap',
    año: 2017,
    link: 'https://www.youtube.com/watch?v=d51lAHNbeAM'
}
function agregarStorage (key,value){
    if (typeof value === "string"){
        localStorage.setItem(key,value)
    }else{
        localStorage.setItem(key,JSON.stringify(value))
    }
}

agregarStorage("nombre",nombre)
agregarStorage("carrito",items)
agregarStorage("película",pelicula)

function obtenerDatos (){
    let nombreUsuario = localStorage.getItem("nombre");
    let carritoUsuario = JSON.parse(localStorage.getItem("carrito"));
    let películaUsuario = JSON.parse(localStorage.getItem("película"));

    console.log(carritoUsuario, typeof carritoUsuario);

    carritoUsuario.forEach(item => {
     console.log(item)
    });
}

obtenerDatos()

function borrarItem (item){
localStorage.removeItem(item)
}

 borrarItem ("nombre")
borrarItem ("undefined")
borrarItem ("name") 

function borrarTodo(){
localStorage.clear()
}
borrarTodo() */

const Username = document.querySelector("#Username");
const Password = document.querySelector("#Password");
const formulario = document.querySelector("#formulario");