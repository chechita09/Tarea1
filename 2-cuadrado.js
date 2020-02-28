var num = parseInt(prompt("Ingrese un número", "Ingrese un número"));

var cuadrado = 2;
var cubo = 3;

var res2 = Math.pow(num, cuadrado);
var res3 = Math.pow(num, cubo);

document.write("El cuadrado del número es: " + res2 + "<br>");
document.write("El cubo del número es: " + res3);