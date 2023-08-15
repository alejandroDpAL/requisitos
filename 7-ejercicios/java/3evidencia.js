var n1 = parseFloat(prompt("ingrese calificacion: "))

if (n1 >= 10 ){
    console.log("tu nota se pasa de lo permitido")
}
if (n1 == 0){
    console.log("tu nota no existe")
}

if (n1 >= 7 && n1 <= 10) {
    console.log("aprobado")
}
if (n1 < 7 && n1 >= 1) {
    console.log("no aprobado")
}