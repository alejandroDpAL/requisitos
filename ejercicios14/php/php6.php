<form action="#" method = "post"> 
    <input type="number" name = "pesos" placeholder= "Ingrese un valor en pesos">
    <button type = "submit">Enviar</button>
</form>

<?php

$pesos = $_POST ['pesos'];
$operacion = $pesos * 4444;
echo "El valor en pesos es:  ".$pesos;
echo "<br>";
echo "El valor en Euros es:  ".$operacion;