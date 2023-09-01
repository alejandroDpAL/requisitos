
<?php
$n1 = floatval(readline(prompt:"INGRESE CALIFICACION: \n"));

if($n1 == 0){
    echo "la nota escrita no existe";
}
if($n1 >= 11){
    echo "la nota sobrepasa la deseada";
}
if($n1 > 7 && $n1 <= 10){
    echo "usted APROBO";
}

if($n1 < 7 && $n1 >= 1){
    echo "usted NO APROBO";
}
?>
