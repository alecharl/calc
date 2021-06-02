var operandoa;
var operandob;
var operacion;
var resetResult; 

function init(){
    resetResult = new Boolean(false) ;
    //variables
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    //Eventos
    uno.onclick = function(e){
      if(resetResult){ limpiar(); resetResult = false;}//
      resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
      if(resetResult){ limpiar(); resetResult = false;}//
      resultado.textContent = resultado.textContent + "2";
  }
    tres.onclick = function(e){
      if(resetResult){ limpiar(); resetResult = false;}//
      resultado.textContent = resultado.textContent + "3";
  }
    cuatro.onclick = function(e){
      if(resetResult){ limpiar(); resetResult = false;}//
      resultado.textContent = resultado.textContent + "4";
  }
    cinco.onclick = function(e){
      if(resetResult){ limpiar(); resetResult = false;}//
      resultado.textContent = resultado.textContent + "5";
  }
    seis.onclick = function(e){
      if(resetResult){ limpiar(); resetResult = false;}//
      resultado.textContent = resultado.textContent + "6";
  }
    siete.onclick = function(e){
      if(resetResult){ limpiar(); resetResult = false;}//
      resultado.textContent = resultado.textContent + "7";
  }
    ocho.onclick = function(e){
      if(resetResult){ limpiar(); resetResult = false;}//
      resultado.textContent = resultado.textContent + "8";
  }
    nueve.onclick = function(e){
      if(resetResult){ limpiar(); resetResult = false;}//
      resultado.textContent = resultado.textContent + "9";
  }
    cero.onclick = function(e){
      if(resetResult){ limpiar(); resetResult = false;}//
      resultado.textContent = resultado.textContent + "0";
  }
    reset.onclick = function(e){
      resetear();
    }
    resta.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "-";
      // limpiar();
      resetResult = true;//
    }
    suma.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "+";
      // limpiar();
      resetResult = true;//
    }
    multiplicacion.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "*";
      // limpiar();
      resetResult = true;//
    }
    division.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "/";
      // limpiar();
      resetResult = true;//
    }
    igual.onclick = function(e){
      operandob = resultado.textContent;
      resolver();
      resetResult = true;//
      // limpiar();
}

function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
function resolver(){
  //parsefloat(mal), no es == a parseFloat(bien)
  var res = 0;
  operandob = resultado.textContent;//faltaba declarar el valor de operandob
  switch (operacion) {
    //todas las operaciones eran sumas.
    case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        console.log("operando a: " + operandoa + "operando b: " + operandob);
        break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  }
  resetear();
  resultado.textContent = res;
  }
}
