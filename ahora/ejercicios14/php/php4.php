<form action="#" method = "post"> 
    <input type="number" name = "precio" placeholder= "Ingrese precio">
    <input type="number" name = "descuento" placeholder= "Ingrese descuento">
    <button type = "submit">Enviar</button>
</form>

<?php

$precio = $_POST ['precio'];
$descuento = $_POST ['descuento'];
$operacion1 = $precio * $descuento / 100;
$resultado = $precio - $operacion1;
echo "El precio final con descuento es de:  ".$resultado;
?>