//mostrar el resultado html
const n = document.querySelector("#datoNombre")
const a = document.querySelector("#datoApellido")
const d = document.querySelector("#datoDireccion")
const f = document.querySelector("#datoFecha")

function almacenarData(){
    let nom , ape, dir, fec
    //capturar data 

    nom = document.getElementById("nombre").value
    ape = document.getElementById("apellido").value
    dir = document.getElementById("direccion").value
    fec = document.getElementById("fecha").value

//almacenamiento local storage

localStorage.setItem("Nombre", nom);
localStorage.setItem("Apellido", ape);
localStorage.setItem("Direccion", dir);
localStorage.setItem("Fecha", fec);

//limpiamos los campos.
document.getElementById("nombre").value = "";
document.getElementById("apellido").value = "";
document.getElementById("direccion").value = "";
document.getElementById("fecha").value = "";
}
function cargarData(){
    let nombre, apellido, direccion,fecha
    nombre = localStorage.getItem("Nombre");
    apellido = localStorage.getItem("Apellido");
    direccion = localStorage.getItem("Direccion");
    fecha = localStorage.getItem("Fecha");
    /*mostrar datos almacenados*/
    n.innerHTML= nombre;
    a.innerHTML= apellido;
    d.innerHTML= direccion;
    f.innerHTML= fecha;    
}