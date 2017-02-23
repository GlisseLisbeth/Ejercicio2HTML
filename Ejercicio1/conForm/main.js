var farenheit = document.getElementById("fahrenheit");
var celsius = document.getElementById("celsius");
function convertToCelsius(){
  celsius.value    = (farenheit.value-32)*5/9;
  }
function convertToFahrenheit(){
  farenheit.value  = celsius.value*9/5+32;
  }
