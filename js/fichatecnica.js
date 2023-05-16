const a = document.querySelector("#dato1")
const b = document.querySelector("#dato2")
const c = document.querySelector("#dato3")
const d = document.querySelector("#dato4")
const e = document.querySelector("#dato5")
const f = document.querySelector("#dato6")
const g = document.querySelector("#dato7")
const h = document.querySelector("#dato8")
const i = document.querySelector("#dato9")
const j = document.querySelector("#dato10")
const k = document.querySelector("#dato11")
const l = document.querySelector("#dato12")

function getFicha(){
    let  = document.getElementById("nom_producto").value
    document.getElementById("resproduct").innerText = nom_producto
    
    let  , d2 , d3,d4, d5 ,d6, d7,d8,d9,d10, d11, d12,
    d2 = document.getElementById("linea").value
    document.getElementById("reslinea").innerText = linea

    d3 = document.getElementById("versiones").value
    document.getElementById("resanterior").innerText = versiones

    d4 = document.getElementById("version").value
    document.getElementById("resactual").innerText = version

    d5 = document.getElementById("descripcion").value
    document.getElementById("resdescripcion").innerText = descripcion

    d6 = document.getElementById("descripciones").value
    document.getElementById("resdescripciones").innerText = descripciones

    d7 = document.getElementById("productor").value
    document.getElementById("resproductor").innerText = productor

    d8 = document.getElementById("producto").value
    document.getElementById("resproducto").innerText = producto

    d9 = document.getElementById("otro").value
    document.getElementById("resotro").innerText = otro

    d10 = document.getElementById("requerimiento").value
    document.getElementById("resrequerimiento").innerText = requerimiento

    d11 = document.getElementById("requerimientos").value
    document.getElementById("resrequerimientos").innerText = requerimientos

    d12 = document.getElementById("cliente").value
    document.getElementById("rescliente").innerText = cliente
}