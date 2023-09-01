<form action="#" method = "post"> 
    <input type="number" name = "segundos" placeholder= "Ingrese los segundos">
    <button type = "submit">Enviar</button>
</form>

<?php

$segundos = $_POST ['segundos'];



$segundosday = ($segundos/86400);
$segundoshour = ($segundos/3600);
$segundosminutes = ($segundos/60);

echo "La cantidad de dias que hay en los segundos ingresados son:  ".$segundosday;
echo "<br>";
echo "La cantidad de horas que hay en los segundos ingresados son:  ".$segundoshour;
echo "<br>";
echo "La cantidad de minutos que hay en los segundos ingresados son:  ".$segundosminutes;
echo "<br>";
echo "La cantidad de segundos son:  ".$segundos;

?>