<form action="#" method="post">
    <h1>Análisis de suelo</h1>
    <input type="float" name="acidez" placeholder="Ingrese PH (Acidez del suelo)">
    <input type="float" name="materia" placeholder="Ingrese la Materia orgánica">
    <input type="float" name="fosforo" placeholder="Ingrese el Fosforo">
    <input type="float" name="calcio" placeholder="Ingrese el Calcio">
    <input type="float" name="magnesio" placeholder="Ingrese el Magnesio">
    <input type="float" name="potasio" placeholder="Ingrese el Potasio">
    <input type="float" name="aluminio" placeholder="Ingrese el Aluminio">
    <button type="submit">Enviar</button>
</form>

<?php
$acidez = $_POST['acidez'];
$materia = $_POST['materia'];
$fosforo = $_POST['fosforo'];
$calcio = $_POST['calcio'];
$magnesio = $_POST['magnesio'];
$aluminio = $_POST['aluminio'];

    if ($acidez >= 5 && $acidez <= 5.5 &&
    $materia > 8 &&
    $fosforo > 30 &&
   $calcio > 0.9  &&
    $magnesio > 0.4 &&
    $aluminio < 1){
        echo "APROBADO EL SUELO";
    } else {
        echo "NO APROBO EL SUELO";
    }

            
    
?>