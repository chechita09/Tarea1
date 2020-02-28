var precio = prompt("Ingrese el precio del producto:", "Ingrese el precio");
var descuento = precio*.15;
var preciofinal = precio-descuento;

document.write("El precio de temporada es: Q" + preciofinal.toFixed(2) + "<br>");
document.write("Usted ahorra: Q" + descuento.toFixed(2));