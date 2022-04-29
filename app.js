function validarEntero(monto){
    //Debemos siempre validar que nuestro monto sea un entero.
    monto = parseInt(monto)
    //comprabamos si es un valor numerico.
    if (isNaN(monto)){
    //si no llegase a ser un numero pues regresamos la casilla vacia
      return "";
    }else{
      //en caso contrario recuerden regresar el mismo valor ingresado.
      return monto;
    }
}


function calcula(){
    //estamos validando que haya ingreso un monto del caso de que no sea así lanzamos alerta.
    monto = document.fvalida.monto.value
    monto = validarEntero(monto)
    document.fvalida.monto.value=monto
    if (monto=="") {
      alert('Por favor ingrese una cantidad.')
      document.fvalida.monto.focus()
      return 0;
    }else{
      
      var sum = monto * 5 / 100
      var total = sum + monto

      document.getElementById('fee').innerHTML = sum;
      document.getElementById('total').innerHTML = total;
    }
}
