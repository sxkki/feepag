function calcula(){
  if (document.fvalida.monto.value === "" || document.fvalida.metodo.selectedIndex==0) {
      alert('Por favor ingrese una cantidad y seleccione un metodo.');
      document.fvalida.monto.focus();
      return;
  }
  var monto = parseInt(document.fvalida.monto.value);
  var metodo = document.fvalida.metodo.value;
  var tarifas = {
      "metodo1": 7
  };
  var tarifa = tarifas[metodo] * monto / 100;
  var total = monto + tarifa;

  document.getElementById('fee').innerHTML = tarifa;
  document.getElementById('total').innerHTML = total;
}

function calculaV1(){
  if (document.fvalida.monto.value === "" || document.fvalida.metodo.value === "") {
    alert('Por favor ingrese una cantidad y seleccione un metodo.');
    document.fvalida.monto.focus();
    return;
}
var monto = parseFloat(document.fvalida.monto.value);
var metodo = parseFloat(document.fvalida.metodo.value);
var tarifa = metodo * monto / 100;
var total = monto + tarifa;

document.getElementById('fee').innerHTML = tarifa;
document.getElementById('total').innerHTML = total;
}
