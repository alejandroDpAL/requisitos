<form action="#" method="post">
    <input type="number" name="r1" placeholder= "Escriba la resistencia a calcular:">
    <input type="number" name="r2" placeholder= "Escriba otra resistencia a calcular:">
    <button type="submit">Enviar</button>
</form>

<?php
$r1 = $_POST['r1'];
$r2 = $_POST['r2'];


$rta = ($r1*$r2)/($r1+$r2);


echo "La resistencia equivalente es: ".$rta;