<?php
$letraA= intval(readline(prompt:"Numero letra A: \n"));
$letraB= intval(readline(prompt:"Numero letra B: \n"));


$total = $letraA;
$total2 = $letraB;

    if($total > $total2 ){
        echo "El numero de la letra A es mayor ".$letraA;
        
    }

    if($total == $total2){
    echo " Los numeros de las dos letras son iguales ";
}

    elseif ( $total < $total2){
        echo " El numero de la letra B es mayor ".$letraB;
    }