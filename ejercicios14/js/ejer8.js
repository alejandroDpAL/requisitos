function submit(){
    let dia, hora, minutos, day, hour, minutes

    dia = parseInt(document.getElementById("dia").value)
    hora = parseInt(document.getElementById("hora").value)
    minutos = parseInt(document.getElementById("minutos").value)

    day = (dia*86400)
    hour = (hora*3600)
    minutes = (minutos*60)

    Dms = document.getElementById("dms");
    Dms.innerHTML = "la cantidad de segundos que hay en los dias ingresados es: "+ day +"<br>la cantidad de segundos que hay en las horas ingresadas es: "+ hour +"<br>la cantidad de segundos que hay en los minutos ingresados es: "+ minutes

}

