function Mostrar(){
    let altura, base, perimetro, area

    altura = document.getElementById("altura").value 
    base = document.getElementById("base").value 

    perimetro = parseInt((altura*2) + parseInt(base*2))
    area = parseInt((base) * parseInt(altura))

    document.getElementById("perimetro").innerHTML = "el perimetro del rectangulo es: "+ perimetro
    document.getElementById("area").innerHTML = "el area de rectangulo es: "+ area
}