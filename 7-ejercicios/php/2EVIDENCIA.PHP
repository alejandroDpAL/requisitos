<?php
$num1 = intval(readline(prompt:"ingrese un numero" ));
$num2 = intval(readline(prompt:"ingrese un segundo numero"));
$num3 = intval(readline(prompt:"ingrese un tercer numero"));

if($num1 < $num2 && $num1 < $num3){
echo "el primer numero es menor";
}
else if($num2 < $num1 && $num2 < $num3){
echo "el segundo numero es menor";
}
else if($num1 == $num3 && $num1 == $num2){
echo "todos los numeros son iguales, entonces todos son los menores";
}
else if($num2 == $um3 && $num2 < $num1){
echo "el segundo numero y el tercer numero son los menores";
}
else if($num2 == $num1 && $num1 < $num3){
echo "el primero y el segundo numero son los menores";
}
else if($num1 == $num3 && $num1 < $num2){
 echo "el primer numero y el tercero son iguales entonces ellos dos son los menores";
}
else{
    echo "el tercer numero es el menor";
}
