function Mostrar() {
    let pesos, operacion

    pesos = parseInt(document.getElementById("pesos").value)
   
   


operacion = pesos* 4444



Dms = document.getElementById("resultado");
Dms.innerHTML = "El valor en Pesos es: "+ pesos + " y el valor en Euros es: "+ operacion

}