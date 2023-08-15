<?php
$sueldo= floatval(readline(prompt:"ingrese su sueldo: \n"));

$descuento1 = $sueldo * 0.12;
$descuento2 = $sueldo * 0.15;
$descuento3 = $sueldo * 0.18;

if($sueldo <= 500000 && $sueldo > 0) {
    echo "Su sueldo es de ". $sueldo ." y su descuento es de ".$descuento1;
}

if($sueldo <=1000000 && $sueldo > 500000) {
    echo "su Sueldo es de " .$sueldo . "y su descuento es de " .$descuento2;
}

if ( $sueldo > 1000000) {
    echo "su sueldo Es de " . $sueldo ." y su descuento es de ".$descuento3;
}
if ( $sueldo <= 0 ) {
    echo" Error, numero negativo ";
}
?>