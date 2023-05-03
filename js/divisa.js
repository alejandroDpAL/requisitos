function calcular(moneda) {
    const cantidad = Number(document.getElementById("cantidad").value);
    let descuento = 0;
    let tipoCambio = 0;
    let simboloMoneda = "";
   
    switch (moneda) {
      case "dolar":
        descuento = 0.1;
        tipoCambio = 4000;
        simboloMoneda = "$";
        break;
      case "euro":
        descuento = 0.12;
        tipoCambio = 3500;
        simboloMoneda = "€";
        break;
      case "yuan":
        descuento = 0.14;
        tipoCambio = 35;
        simboloMoneda = "¥";
        break;
    }
   
    const totalSinDescuento = cantidad / tipoCambio;
    const totalConDescuento = totalSinDescuento * (1 - descuento);
    const resultado = `Usted comprará ${totalConDescuento.toFixed(2)} ${simboloMoneda} (${(totalSinDescuento * tipoCambio).toFixed(2)} pesos colombianos sin descuento)`;
    document.getElementById("resultado").innerHTML = resultado;
  }