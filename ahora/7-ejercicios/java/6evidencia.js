function calcularSueldoSemanal(horasTrabajadas) {
    var horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas:"));
    var sueldoPorHora = 20;
    var sueldoTotal = 0;
  
    if (horasTrabajadas <= 40) {
      sueldoTotal = sueldoPorHora * horasTrabajadas;
    } else {
      var horasNormales = 40;
      var horasExtras = horasTrabajadas - 40;
      var sueldoPorHoraExtra = 25;
  
      sueldoTotal = (sueldoPorHora * horasNormales) + (sueldoPorHoraExtra * horasExtras);
    }
  
    return sueldoTotal;
  }
  
  // Ejemplo de uso
  var horasTrabajadas = 45;
  var sueldo = calcularSueldoSemanal(horasTrabajadas);
  
  console.log("El sueldo semanal es: $" + sueldo);
  