function calcula(){
  if (document.fvalida.monto.value === "" || document.fvalida.metodo.selectedIndex==0) {
      alert('Por favor ingrese una cantidad y seleccione un metodo.');
      document.fvalida.monto.focus();
      return;
  }
  var monto = parseInt(document.fvalida.monto.value);
  var metodo = document.fvalida.metodo.value;
  var tarifas = {
      "metodo1": 0.155,
      "metodo2": 0.085,
      "metodo3": 0.085
  };
  var tarifa = tarifas[metodo] * monto;
  var total = monto + tarifa;

  document.getElementById('fee').innerHTML = tarifa;
  document.getElementById('total').innerHTML = total;
}
