<form action="#" method = "post"> 
    <input type="number" name = "dias" placeholder= "Ingrese los días">
    <input type="number" name = "horas" placeholder= "Ingrese las horas">
    <input type="number" name = "minutos" placeholder= "Ingrese los minutos">
    <button type = "submit">Enviar</button>
</form>

<?php

$dias = $_POST ['dias'];
$horas = $_POST ['horas'];
$minutos = $_POST ['minutos'];

$day = ($dias*86400);
$hour = ($horas*3600);
$minutes = ($minutos*60);

echo "La cantidad de segundos que hay en los dias ingresados son:  ".$day;
echo "<br>";
echo "La cantidad de segundos que hay en las horas ingresados son:  ".$hour;
echo "<br>";
echo "La cantidad de segundos que hay en los minutos ingresados son:  ".$minutes;