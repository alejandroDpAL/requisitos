<!DOCTYPE html>
<html>
<head>
    <title>Diagnostico </title>
</head>
<body>
    <h1>Diagnostico de Anemia</h1>
    <form method="post">
        <label for="sexo">Sexo:</label>
        <select id="sexo" name="sexo">
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
        </select><br>
        
        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad"><br>
        
        <label for="unidadEdad">Unidad de Edad:</label>
        <select id="unidadEdad" name="unidadEdad">
            <option value="meses">Meses</option>
            <option value="años">Años</option>
        </select><br>
        
        <label for="hemoglobina">Nivel de Hemoglobina (g%):</label>
        <input type="number" step="0.1" id="hemoglobina" name="hemoglobina"><br>
        
        <button type="submit">Calcular Diagnóstico</button>
    </form>
    <!DOCTYPE html>
<html>
<head>
    <title>Resultado del Diagnóstico de Anemia</title>
</head>
<body>
    <h3>Resultado del Diagnóstico de Anemia</h3>

    <?php
    $sexo = $_POST['sexo'];
    $edad = floatval($_POST['edad']);
    $unidadEdad = $_POST['unidadEdad'];
    $hemoglobina = floatval($_POST['hemoglobina']);

    $resultado = '';

    if ($unidadEdad === 'meses' && ($edad < 0 || $edad > 12)) {
        $resultado = 'Error';
    } elseif ($unidadEdad === 'años' && ($edad < 0 || $edad > 100)) {
        $resultado = 'Error';
    } else {
        if ($sexo === 'mujer') {
            if ($edad <= 1) {
                if ($hemoglobina >= 13 && $hemoglobina <= 26) {
                    $resultado = 'Negativo';
                } elseif ($hemoglobina < 13) {
                    $resultado = 'Positivo';
                } else {
                    $resultado = 'Trastorno Mental';
                }
            } elseif ($edad <= 6) {
                if ($hemoglobina >= 10 && $hemoglobina <= 18) {
                    $resultado = 'Negativo';
                } elseif ($hemoglobina < 10) {
                    $resultado = 'Positivo';
                } else {
                    $resultado = 'Trastorno Mental';
                }
            } elseif ($edad <= 12) {
                if ($hemoglobina >= 11 && $hemoglobina <= 15) {
                    $resultado = 'Negativo';
                } elseif ($hemoglobina < 11) {
                    $resultado = 'Positivo';
                } else {
                    $resultado = 'Trastorno Mental';
                }
            } elseif ($edad <= 5) {
                if ($hemoglobina >= 11.5 && $hemoglobina <= 15) {
                    $resultado = 'Negativo';
                } elseif ($hemoglobina < 11.5) {
                    $resultado = 'Positivo';
                } else {
                    $resultado = 'Trastorno Mental';
                }
            } elseif ($edad <= 10) {
                if ($hemoglobina >= 12.6 && $hemoglobina <= 15.5) {
                    $resultado = 'Negativo';
                } elseif ($hemoglobina < 12.6) {
                    $resultado = 'Positivo';
                } else {
                    $resultado = 'Trastorno Mental';
                }
            } elseif ($edad <= 15) {
                if ($hemoglobina >= 13 && $hemoglobina <= 15.5) {
                    $resultado = 'Negativo';
                } elseif ($hemoglobina < 13) {
                    $resultado = 'Positivo';
                } else {
                    $resultado = 'Trastorno Mental';
                }
            } else {
                if ($hemoglobina >= 13 && $hemoglobina <= 26) {
                    $resultado = 'Negativo';
                } else {
                    $resultado = 'Trastorno Mental';
                }
            }
        } elseif ($sexo === 'hombre') {
            if ($edad <= 1) {
                $resultado = 'Error';
            } elseif ($edad <= 6) {
                if ($hemoglobina >= 10 && $hemoglobina <= 18) {
                    $resultado = 'Negativo';
                } elseif ($hemoglobina < 10) {
                    $resultado = 'Positivo';
                } else {
                    $resultado = 'Trastorno Mental';
                }
            } elseif ($edad <= 12) {
                $resultado = 'Error';
            } else {
                if ($hemoglobina >= 14 && $hemoglobina <= 18) {
                    $resultado = 'Negativo';
                } elseif ($hemoglobina < 14) {
                    $resultado = 'Positivo';
                } else {
                    $resultado = 'Trastorno Mental';
                }
            }
        }
    }

    echo '<p>Resultado: ' . $resultado . '</p>';
    ?>
</body>
</html>
