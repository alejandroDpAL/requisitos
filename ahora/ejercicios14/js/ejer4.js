function Mostrar() {
    let  precio, descuento, total, resultado
    precio = parseInt(document.getElementById("precio").value)
    descuento = parseInt(document.getElementById("descuento").value)

    total = precio*descuento/100
    resultado= precio-total

    Descuento = document.getElementById("resultado");
    Descuento.innerHTML = " El total a pagar es "+resultado

}