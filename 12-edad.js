function calcularEdad(){
    var diaNacimiento = prompt("Ingrese el día de su nacimiento");
    var mesNacimiento = prompt("Ingrese el mes de su nacimiento");
    var anioNacimiento = prompt("Ingrese el año de su nacimiento");

     fecha_hoy = new Date();
     anio_actual = fecha_hoy.getYear();
     mes_actual = fecha_hoy.getMonth();
     dia_actual = fecha_hoy.getDate();
     edad = (anio_actual + 1900) - anioNacimiento;

     if ( mes_actual < (mesNacimiento- 1)){
         edad--;
       }
       if (((mesNacimiento - 1) == mes_actual) && (dia_actual < diaNacimiento)){ 
         edad--;
       }
      
       return(edad);
}
//Llamar el valor de la funcion para poder utilizarlo fuera de ella
calcularEdad();


document.write("Su edad es: " + edad);