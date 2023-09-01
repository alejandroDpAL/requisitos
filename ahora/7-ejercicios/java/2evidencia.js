num1 = prompt("ingrese un numero")
num2 = prompt("ingrese un segundo numero")
num3 = prompt("ingrese un tercer numero")

if(num1 < num2 && num1 < num3){
alert("el primer numero es menor")
}
else if(num2 < num1 && num2 < num3){
alert("el segundo numero es menor")
}
else if(num1 == num3 && num1 == num2){
alert("todos los numeros son iguales, entonces todos son los menores")
}
else if(num2 == num3 && num2 < num1){
alert("el segundo numero y el tercer numero son los menores")
}
else if(num2 == num1 && num1 < num3){
alert("el primero y el segundo numero son los menores")
}
else if(num1 == num3 && num1 < num2){
 alert("el primer numero y el tercero son iguales entonces ellos dos son los menores")
}
else{
    alert("el tercer numero es el menor")
}