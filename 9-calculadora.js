var n1 = Number(prompt("Ingrese el primer número:"));
var ope = prompt("Ingrese la operación a realizar", "suma (+), resta (-), multiplicación (*), división (/))");
var n2 = Number(prompt("Ingrese el segundo número:"));
var res = 0;

if(ope == "+"){
    res = n1 + n2;
    document.write("El resultado de la suma es: " + res);
}else if(ope == "-"){
    res = n1 - n2;
    document.write("El resultado de la resta es: " + res);
}else if(ope == "*"){
    res = n1 * n2;
    document.write("El resultado de la multiplicación es: " + res);
}if(n2 == 0){
    document.write("No es posible dividir entre cero.");
}else if(ope == "/"){
    res = n1 / n2;
    document.write("El resultado de la división es: " + res);
}