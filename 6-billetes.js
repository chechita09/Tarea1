var numero = prompt("Ingrese un número:", "Ingrese un número");
var billetes = Array(100,50,20,10,5,1,0.5,0.25,0.1,0.05,0.01);
var cantidad = Array(0,0,0,0,0,0,0,0,0,0,0);

document.write("El desglose de la cantidad es el siguiente:"+"<br>");

for(i=0;i<billetes.length;i++){
  if(numero >= billetes[i]){
    cantidad[i] = parseInt(numero/billetes[i]);
    numero = (numero-(cantidad[i]*billetes[i])).toFixed(2);
  }
}

for(i=0;i<billetes.length;i++){
  if(cantidad[i]>0){
    if(billetes[i]>=5){
      document.write("Hay: " + cantidad[i] + " billetes de Q" + billetes[i]+"<br>");
       
    }else document.write("Hay: " + cantidad[i] + " monedas de Q" + billetes[i]+"<br>");
  }
}