function submit(){
    let radio, pi, peri, area, volumen
    
        radio = parseInt(document.getElementById("radio").value)
    
        pi = 3.1416
        peri = (2*pi*radio)
        area = pi * (radio*radio)
        volumen = (4 * pi)*(radio*radio*radio)/3
    
    
        Todo = document.getElementById("Radio");
        Todo.innerHTML = "el perimetro de la circunferencia es: "+ peri +"<br> el area de la circuferencia es: "+ area + "<br> el volumen de la circunferencia es: "+ volumen
    }
    