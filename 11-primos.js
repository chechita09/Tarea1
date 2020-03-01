var num = Number(prompt("Ingrese un número:"));
var primo = true;

for(i=2; i<num; i++){
    if(num % i == 0){
       primo = false;
    }
}

if(primo == true){
    document.write("El número " + num + " es primo.");
}else {
    document.write("El número " + num + " no es primo.");
}