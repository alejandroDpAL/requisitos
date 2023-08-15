<form action="#" method = "post"> 
    <input type="number" name = "altura" placeholder= "Ingrese la altura del rectangulo">
    <input type="number" name = "base" placeholder= "Ingrese la base del resctangulo">
    <button type = "submit">Enviar</button>
</form>

<?php

$altura = $_POST ['altura'];
$base = $_POST ['base'];
$perimetro = $altura + $base;
$area = $base * $altura;
echo "El perimetro es:  ".$perimetro;
echo "<br>";
echo "El area es:  ".$area;
?>