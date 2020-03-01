var num = Number(prompt("Ingrese un número", "Ingrese un número"));
var fac = 0;

document.write("Resultado: ");

if(num > 0){
    for (i = 1; i <= num; i++){
        fac = fac + i;
      if( i < num){
        document.write(i + " + ");
      }else if(i == num){
        document.write(i + " = ");
      }
    }
    document.write(fac);
}