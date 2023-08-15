function  Mostrar() {
     let inicial, altura

     inicial = document.getElementById("numero1").value
     altura = document.getElementById("numero2").value

     document.getElementById("Numero1").innerHTML = " tu altura es de "+ inicial +" "
     document.getElementById("Numero2").innerHTML = " y tus iniciales son "+ altura +" "
}