function calcularV(){
  if (document.fvalida.monto.value === "" || document.fvalida.metodo.value === "") {
    alert('Por favor ingrese una cantidad y seleccione un metodo.');
    document.fvalida.monto.focus();
    return;
}
var monto = parseFloat(document.fvalida.monto.value);
var metodo = parseFloat(document.fvalida.metodo.value);
var tarifa = metodo * monto / 100;
var total = monto + tarifa;

document.getElementById('fee').innerHTML = tarifa.toFixed(2);
document.getElementById('total').innerHTML = total.toFixed(2);
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

document.getElementById('fee').value = tarifa.toFixed(2);
document.getElementById('total').value = total.toFixed(2);
}

function calculaV2(){
  if (document.Pvalida.montoRecib.value === "") {
    alert('Por favor ingrese una cantidad y seleccione un metodo.');
    document.fvalida.monto.focus();
    return;
}
var fee1 = parseFloat(document.Pvalida.fee1.value);
var fee2 = parseFloat(document.Pvalida.fee2.value);
var montoR = parseFloat(document.Pvalida.montoRecib.value);
var resultComi = montoR * fee1 / 100;
var resultFee = resultComi + fee2;
var resultEnvi = montoR + resultFee;

document.getElementById('montoEnvio').value = resultEnvi.toFixed(2);
document.getElementById('montoFee').value = resultFee.toFixed(2);
}