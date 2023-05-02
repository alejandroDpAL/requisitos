function sinDescuento(){
    let cantidad
    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value
    // let n2
    // n2 = document.getElementById("numero2").value
    let valorTotal
    valorTotal = cantidad*valor


    document.getElementById("sin").innerHTML = 
    "<div> el valor es "+ valorTotal +"</div>"
}
function quince(){
    let cantidad
    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value

    let valorTotalconDescuento
    valorTotalconDescuento = cantidad*valor*85 /100
    document.getElementById("sin").innerHTML =
    "<div> el valor es "+ valorTotalconDescuento +"</div>"
}
function cincuenta(){
    let cantidad
    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value
    // let n2
    // n2 = document.getElementById("numero2").value
    let valorTotalSinDescuento
    valorTotalSinDescuento = cantidad*valor

    let valorTotal1 
    valorTotal1 = valorTotalSinDescuento*50 / 100


    document.getElementById("sin").innerHTML =
    "<div> el valor es "+ valorTotal1 +"</div>"
}
