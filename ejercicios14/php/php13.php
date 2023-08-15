<form action="#" method="post">
  <input type="text" name="nombre" placeholder="Escriba su nombre:">
  <input type="text" name="genero" placeholder="Escriba su genero (mujer/hombre):">
  <input type="number" name="salario" placeholder="Escriba su salario básico">
  <input type="number" name="tiempo" placeholder="Escriba los años trabajados">
  <button type="submit">Enviar</button>
</form>

<?php
$nombre = $_POST['nombre'];
$genero = $_POST['genero'];
$salario = $_POST['salario'];
$tiempo = $_POST['tiempo'];

$aumento20 = ($salario * 0.15);
$bonificacion20 = $salario + $aumento20;
$aumento15 = ($salario * 0.20);
$bonificacion15 = $salario + $aumento15;


if ($genero == "mujer"){
  if ($tiempo > 5){
echo"Hola ".$nombre." su salario basico es de ".$salario." y su salario con el aumento es de ".$bonificacion15;}
elseif ($tiempo <= 5){
echo"Hola ".$nombre." su salario basico es de ".$salario." y su salario con el aumento es de ".$bonificacion20;}}

if ($genero == "hombre"){
    if ($tiempo > 6){
echo"Hola ".$nombre." su salario basico es de ".$salario." y su salario con el aumento es de ".$bonificacion15;}
elseif ($tiempo <= 6){
echo"Hola ".$nombre." su salario basico es de ".$salario." y su salario con el aumento es de ".$bonificacion20;}}
?>