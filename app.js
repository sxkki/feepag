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
    }

    if (document.fvalida.metodo.selectedIndex==0){
      alert("Debe seleccionar un metodo.")
      document.fvalida.metodo.focus()
      return 0;
    }else{
      if(document.fvalida.metodo.selectedIndex==1){
        var sum1 = monto * 3 / 100
        var total1 = sum1 + monto
        document.getElementById('fee').innerHTML = sum1;
        document.getElementById('total').innerHTML = total1;
      }
      if(document.fvalida.metodo.selectedIndex==2){
        var sum2 = monto * 2 / 100
        var total2 = sum2 + monto
        document.getElementById('fee').innerHTML = sum2;
        document.getElementById('total').innerHTML = total2;
      }
      if(document.fvalida.metodo.selectedIndex==3){
        var sum3 = monto * 4 / 100
        var total3 = sum3 + monto
        document.getElementById('fee').innerHTML = sum3;
        document.getElementById('total').innerHTML = total3;
      }
    }

    
}
