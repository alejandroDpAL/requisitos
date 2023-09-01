function Mostrar() {
    let segundos, segundosday, segundoshour, segundosminutes

    segundos = parseInt(document.getElementById("segundos").value)
    


segundosday = (segundos/86400)
segundoshour = (segundos/3600)
segundosminutes = (segundos/60)

Dms = document.getElementById("dms");
Dms.innerHTML =  "La cantidad de dias que hay en los segundos ingresados son:  "+ segundosday+
"<br>La cantidad de horas que hay en los segundos ingresados son:  "+ segundoshour+
"<br>La cantidad de minutos que hay en los segundos ingresados son:  "+ segundosminutes+
"<br>La cantidad de segundos son:  "+ segundos

}