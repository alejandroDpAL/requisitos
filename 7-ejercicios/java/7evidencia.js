function Calcular() {
  let sueldo = parseFloat(document.getElementById("sueldo").value);
  let sueldoFinal, total;

if (sueldo <= 500000 && sueldo > 0) {
  sueldoFinal = (sueldo*12)/100; 
  total = sueldo-sueldoFinal;
  mensaje = document.getElementById("res1");
  mensaje.innerHTML = "Se le hizo un descuento de: "+ sueldoFinal;
  mensaje = document.getElementById("res2");
  mensaje.innerHTML = "Su sueldo Final es: "+ total;
}
if (sueldo >= 500000 && sueldo <= 1000000){ 
  sueldoFinal = (sueldo*15)/100; 
  totaldos = sueldo-sueldoFinal;
  mensaje = document.getElementById("res1");
  mensaje.innerHTML = "Se le hizo un descuento de: "+ sueldoFinal;
  mensaje = document.getElementById("res2");
  mensaje.innerHTML = "Su sueldo Final es: "+ totaldos;
}
if (sueldo > 1000000){
  sueldoFinal = (sueldo*18)/100; 
  totaltres = sueldo-sueldoFinal;
  mensaje = document.getElementById("res1");
  mensaje.innerHTML = "Se le hizo un descuento de: "+ sueldoFinal;
  mensaje = document.getElementById("res2");
  mensaje.innerHTML = "Su sueldo Final es: "+ totaltres;
}
if (sueldo <= 0) {
  mensaje = document.getElementById("res1");
  mensaje.innerHTML = "Error, numero negativo ";
}
}