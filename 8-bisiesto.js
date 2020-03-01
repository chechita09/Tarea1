var anio = parseInt(prompt("Ingrese un año para saber si es bisiesto"));

if (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0)){
    document.write("El año " + anio + " es bisiesto.");
}else {
    document.write("El año " + anio + " no es bisiesto.")
}