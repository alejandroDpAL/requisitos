function calcular() {
    let nombre,genero,salario,tiempo,aumento20,aumento15

    nombre = document.getElementById("nombre").value
    genero = document.getElementById("genero").value
    salario = parseFloat(document.getElementById("salario").value)
    tiempo = parseFloat(document.getElementById("tiempo").value)

    aumento20 = (salario * 0.15);
    bonificaicon20 = salario + aumento20;
    aumento15 = (salario * 0.20);
    bonificaicon15 = salario + aumento15;

    if(genero == "mujer"){
      if(tiempo < 5)   
      mensaje =document.getElementById("mensaje");
      mensaje.innerHTML = "Hola "+nombre+" su salario basico es de "+salario+" y su salario con el aumento es de "+bonificaicon20
         if(tiempo <= 5)
         mensaje =document.getElementById("mensaje");
         mensaje.innerHTML = "Hola "+nombre+" su salario basico es de "+salario+" y su salario con el aumento es de "+bonificaicon15
        }

    if(genero == "hombre"){
        if(tiempo < 6)
        mensaje =document.getElementById("mensaje");
        mensaje.innerHTML = "Hola "+nombre+" su salario basico es de "+salario+" y su salario con el aumento es de "+bonificaicon15

        if(tiempo <= 6)
        mensaje =document.getElementById("mensaje");
        mensaje.innerHTML = "Hola "+nombre+" su salario basico es de "+salario+" y su salario con el aumento es de "+bonificaicon20
      }
 
  }