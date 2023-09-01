function calcular() {
    let acidez,materia,fosforo,calcio,magnesio,potasio,aluminio

    acidez = parseFloat(document.getElementById("acidez").value)
    materia  = parseFloat(document.getElementById("materia").value)
    fosforo = parseFloat(document.getElementById("fosforo").value)
    calcio = parseFloat(document.getElementById("calcio").value)
    magnesio = parseFloat(document.getElementById("magnesio").value)
    potasio = parseFloat(document.getElementById("potasio").value)
    aluminio = parseFloat(document.getElementById("aluminio").value)

    if (acidez >= 5 && acidez <= 5.5 &&
        materia >= 8 &&
        fosforo >= 30 &&
        calcio >= 0.9  &&
        magnesio >= 0.4 &&
        aluminio <= 1){
            mensaje =document.getElementById("mensaje");
            mensaje.innerHTML ="APROBADO EL SUELO"
        } else {
            mensaje =document.getElementById("mensaje");
            mensaje.innerHTML = "NO APROBO EL SUELO"
        }
}