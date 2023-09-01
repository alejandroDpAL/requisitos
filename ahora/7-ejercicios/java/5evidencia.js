// Solicitar el turno de trabajo y el número de horas trabajadas al usuario
var turno = prompt("Ingrese el turno de trabajo (diurno/nocturna):");
var horasTrabajadas = parseInt(prompt("Ingrese el número de horas trabajadas:"));

var tarifaHora = 0;

if (turno === "diurno") {
  tarifaHora = 10;
} else if (turno === "nocturna") {
  tarifaHora = 15;
} else {
  console.log("Turno no válido. Por favor, ingrese 'diurno' o 'nocturna'.");
}

// Calcular el valor a pagar
var valorPagar = tarifaHora * horasTrabajadas;


console.log("El valor a pagar es: $" + valorPagar);
