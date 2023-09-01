<!-- 3. Escribe un programa que pregunte al usuario su altura aproximada, sus iniciales y conteste diciendo: “Sus iniciales son: A.J.R. y su altura 1.34 (por ejemplo)” -->


<form action="#" method = "post"> 
    <input type="number" name = "altura" placeholder= "Ingrese su altura aproximada">
    <input type="text" name = "iniciales" placeholder= "Ingrese sus iniciales">
    <button type = "submit">Enviar</button>
</form>

<?php

$altura = $_POST ['altura'];
$iniciales = $_POST ['iniciales'];
echo "Sus iniciales son:  ".$iniciales." y su altura es: ".$altura;
?>