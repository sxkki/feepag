function calcularV(){
  if (document.fvalida.monto.value === "" || document.fvalida.metodo.value === "") {
    alert('Por favor ingrese una cantidad y seleccione un metodo.');
    document.fvalida.monto.focus();
    return;
}
let monto = parseFloat(document.fvalida.monto.value);
let metodo = parseFloat(document.fvalida.metodo.value);
let tarifa = metodo * monto / 100;
let total = monto + tarifa;

document.getElementById('fee').innerHTML = tarifa.toFixed(2);
document.getElementById('total').innerHTML = total.toFixed(2);
}

function calculaV1(){
  if (document.fvalida.monto.value === "" || document.fvalida.metodo.value === "") {
    alert('Por favor ingrese una cantidad y seleccione un metodo.');
    document.fvalida.monto.focus();
    return;
}
let monto = parseFloat(document.fvalida.monto.value);
let metodo = parseFloat(document.fvalida.metodo.value);
let tarifa = metodo * monto / 100;
let total = monto + tarifa;

document.getElementById('fee').value = tarifa.toFixed(2);
document.getElementById('total').value = total.toFixed(2);
}

function calculaV2(){
  if (document.Pvalida.montoRecib.value === "") {
    alert('Por favor ingrese una cantidad y seleccione un metodo.');
    document.Pvalida.montoRecib.focus();
    return;
}
let fee1 = parseFloat(document.Pvalida.fee1.value); // % = 5,40
let fee2 = parseFloat(document.Pvalida.fee2.value); // tarifa fija = 0,30 
let montoR = parseFloat(document.Pvalida.montoRecib.value); // monto que deseas calcular
let resultComi = 100 * (fee2 + montoR); //primera parte para sacar el monto 
let resultFee = (0-fee1) + 100;
let resultEnvi = resultComi / resultFee;
let resultFees = (resultEnvi * fee1 / 100) + fee2;


document.getElementById('montoEnvio').value = new Intl.NumberFormat('us', { style: 'currency', currency: 'USD' }).format(resultEnvi);
document.getElementById('montoFee').value = new Intl.NumberFormat('us', { style: 'currency', currency: 'USD' }).format(resultFees);
} 

function calculaV3(){
  if (document.evalida.emonto.value === "") {
    alert('Por favor ingrese una cantidad y seleccione un metodo.');
    document.evalida.emonto.focus();
    return;
}
let fee1 = parseFloat(document.evalida.fee1.value);
let fee2 = parseFloat(document.evalida.fee2.value);
let montoR = parseFloat(document.evalida.emonto.value);
let resultComi = montoR * fee1 / 100;
let resultFee = resultComi + fee2;
let resultEnvi = montoR - resultFee;
document.getElementById('recib').value = new Intl.NumberFormat('us', { style: 'currency', currency: 'USD' }).format(resultEnvi);
document.getElementById('Fee').value = new Intl.NumberFormat('us', { style: 'currency', currency: 'USD' }).format(resultFee);
}