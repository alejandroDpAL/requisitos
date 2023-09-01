var n1 = prompt("ingrese su primer nota: ")
var n2 = prompt("ingrese su segunda nota: ")
var n3 = prompt("ingrese su tercer nota: ")

var promedio = parseInt(n1)+parseInt(n2)+parseInt(n3)/3

alert(promedio)

if (promedio>70) {
    alert ("Usted APROBO")
    }
    else {
        alert ("usted NO APROBO")
        }
