<?php
function calcularSueldoSemanal($horasTrabajadas) {
    $horasTrabajadas = intval(readline(prompt:"Ingrese el número de horas trabajadas: "));
    $sueldoBase = 20; 
    $horasNormales = 40; 
    $tarifaExtra = 25; 
    
    if ($horasTrabajadas <= $horasNormales) {
       
        $sueldoSemanal = $horasTrabajadas * $sueldoBase;
    } else {
       
        $horasExtra = $horasTrabajadas - $horasNormales;
        $sueldoSemanal = ($horasNormales * $sueldoBase) + ($horasExtra * $tarifaExtra);
    }
    
    return $sueldoSemanal;
}

$sueldo = calcularSueldoSemanal($horasTrabajadas);
echo "El sueldo semanal para $horasTrabajadas horas trabajadas es: $" . $sueldo;
?>
