<?php
$letraA= intval(readline(prompt:"Numero letra A: \n"));
$letraB= intval(readline(prompt:"Numero letra B: \n"));


$total = $letraA;
$total2 = $letraB;

    if($total > $total2){
    echo " Los numero mayor es: " .$letraA;
}

    elseif ( $total < $total2){
        echo " El numero mayor es ".$letraB;
    }