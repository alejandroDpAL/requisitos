<?php
$cal1= intval(readline(prompt:"Calificacion 1: \n"));
$cal2= intval(readline(prompt:"Calificacion 2: \n"));
$cal3= intval(readline(prompt:"Calificacion 3: \n"));
/* $cal1 = 100;
$cal2 = 100;
$cal3 = 100; */
$total = $cal1 + $cal2 + $cal3/3;
$promedio = 70;

    if($total >= $promedio ){
        echo "usted APROBO";
    }

    elseif ( $total < $promedio){
        echo "usted NO APROBO";
    }