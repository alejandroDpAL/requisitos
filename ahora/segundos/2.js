function calcularDiagnostico() {
    const sexo = document.getElementById('sexo').value;
    const edad = parseFloat(document.getElementById('edad').value);
    const unidadEdad = document.getElementById('unidadEdad').value;
    const hemoglobina = parseFloat(document.getElementById('hemoglobina').value);

    let resultado = '';

    if (unidadEdad === 'meses' && (edad < 0 || edad > 12)) {
        resultado = 'Error';
    } else if (unidadEdad === 'años' && (edad < 0 || edad > 100)) {
        resultado = 'Error';
    } else {
        if (sexo === 'mujer') {
            if (edad <= 1) {
                if (hemoglobina >= 13 && hemoglobina <= 26) {
                    resultado = 'Negativo';
                } else if (hemoglobina < 13) {
                    resultado = 'Positivo';
                } else {
                    resultado = 'Trastorno Mental';
                }
            } else if (edad <= 6) {
                if (hemoglobina >= 10 && hemoglobina <= 18) {
                    resultado = 'Negativo';
                } else if (hemoglobina < 10) {
                    resultado = 'Positivo';
                } else {
                    resultado = 'Trastorno Mental';
                }
            } else if (edad <= 12) {
                if (hemoglobina >= 11 && hemoglobina <= 15) {
                    resultado = 'Negativo';
                } else if (hemoglobina < 11) {
                    resultado = 'Positivo';
                } else {
                    resultado = 'Trastorno Mental';
                }
            } else if (edad <= 5) {
                if (hemoglobina >= 11.5 && hemoglobina <= 15) {
                    resultado = 'Negativo';
                } else if (hemoglobina < 11.5) {
                    resultado = 'Positivo';
                } else {
                    resultado = 'Trastorno Mental';
                }
            } else if (edad <= 10) {
                if (hemoglobina >= 12.6 && hemoglobina <= 15.5) {
                    resultado = 'Negativo';
                } else if (hemoglobina < 12.6) {
                    resultado = 'Positivo';
                } else {
                    resultado = 'Trastorno Mental';
                }
            } else if (edad <= 15) {
                if (hemoglobina >= 13 && hemoglobina <= 15.5) {
                    resultado = 'Negativo';
                } else if (hemoglobina < 13) {
                    resultado = 'Positivo';
                } else {
                    resultado = 'Trastorno Mental';
                }
            } else {
                if (hemoglobina >= 13 && hemoglobina <= 26) {
                    resultado = 'Negativo';
                } else {
                    resultado = 'Trastorno Mental';
                }
            }
        } else if (sexo === 'hombre') {
            if (edad <= 1) {
                resultado = 'Error';
            } else if (edad <= 6) {
                if (hemoglobina >= 10 && hemoglobina <= 18) {
                    resultado = 'Negativo';
                } else if (hemoglobina < 10) {
                    resultado = 'Positivo';
                } else {
                    resultado = 'Trastorno Mental';
                }
            } else if (edad <= 12) {
                resultado = 'Error';
            } else {
                if (hemoglobina >= 14 && hemoglobina <= 18) {
                    resultado = 'Negativo';
                } else if (hemoglobina < 14) {
                    resultado = 'Positivo';
                } else {
                    resultado = 'Trastorno Mental';
                }
            }
        }
    }

    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}
