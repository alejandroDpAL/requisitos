function Valor() {
    let numero1, numero2, numero3, n1, n2, n3, n4
    numero1 = document.getElementById("cantidad1").value
    numero2 = document.getElementById("valor1").value
        
    numero3 = numero1*numero2 

    n1 = document.getElementById("cantidad2").value
    n2 = document.getElementById("valor2").value

    n3 = n1*n2 
    n4 = n3+numero3

    document.getElementById("Valor1").innerHTML = "<div>Valor total Producto uno "+ numero3 +"</div>"
    document.getElementById("Valor2").innerHTML = "<div>Valor total Producto dos "+ n3 +"</div>"
    document.getElementById("Valor-total").innerHTML = "<div>Valor total "+ n4 +"</div>" 
}

function Factura() {
    let s1, p1, c1, v1, vt1, p2, c2, v2, vt2, vt3
    s1 = document.getElementById("subproyecto").value
    document.getElementById("Valor-factura0").innerHTML =  "<div>Nombre del Subproyecto "+ s1 + "</div>"
    p1 = document.getElementById("producto1").value
    document.getElementById("Valor-factura1").innerHTML =  "<div>Nombre del producto uno "+ p1 + "</div>"
    
    c1 = document.getElementById("cantidad1").value
    document.getElementById("Valor-factura2").innerHTML = "<div>Cantidad del producto uno "+ c1 +"</div>"
    v1 = document.getElementById("valor1").value
    document.getElementById("Valor-factura3").innerHTML = "<div>Valor del producto uno "+ v1 +"</div>"
    /* vt1 = document.getElementById("Valor1").value */
    vt1 = c1*v1
    document.getElementById("Valor-factura4").innerHTML = "<div>Valor total del producto uno "+ vt1 +"</div>"


    p2 = document.getElementById("producto2").value
    document.getElementById("Valor-factura5").innerHTML =  "<div>Nombre del producto dos "+ p2 +"</div>"

    c2 = document.getElementById("cantidad2").value
    document.getElementById("Valor-factura6").innerHTML = "<div>Cantidad del producto dos "+ c2 +"</div>"
    v2 = document.getElementById("valor2").value
    document.getElementById("Valor-factura7").innerHTML = "<div>Valor producto dos "+ v2 +"</div>"
    /* vt2 = document.getElementById("Valor2").value */
    vt2 = c2*v2
    document.getElementById("Valor-factura8").innerHTML = "<div>Valor total del producto dos "+ vt2 +"</div>" 
    
    vt3 = vt1+vt2
    document.getElementById("Valor-factura9").innerHTML = "<div>Total "+ vt3 +"</div>" 

}

