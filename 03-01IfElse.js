let condicion = false;

if (condicion) {
  console.log ("Condicion verdadera");
}
else {
  console.log ("Condicion falsa");
}

//Ejemplo

let numero = 3;

if ( numero == 1 ) {
  console.log ( "Numero uno" );
}
else if ( numero == 2 ) {
  console.log ( "Numero dos ");
}
else if ( numero == 3 ) {
  console.log ( "Numero tres" );
}
else if ( numero == 4 ) {
  console.log ( "Numero cuatro" );
}
else {
  console.log ( "Numero desconocido" );
}

//Calculo de la estacion del ano

let mes = 4;
let estacion;

if ( mes == 1 || mes == 2 || mes == 12 ) {
  estacion = "Invierno";
}
else if ( mes == 3 || mes == 4 || mes == 5 ) {
  estacion = "Primavera";
}
else if ( mes == 6 || mes == 7 || mes == 8 ) {
  estacion = "Verano";
}
else if ( mes == 9 || mes == 10 || mes == 11 ) { 
  estacion = "Otono";
}
else {
  estacion = "Valor incorrecto";
}
console.log ( estacion );

//Ejercicio calculo hora del dia

let hora = 22;
let saludo;

if ( hora >= 6 && hora <= 11 ) {
  saludo = "Buenos dias";
}
else if ( hora >= 12 && hora <= 18 ) {
  saludo = "Buenas tardes";
}
else if ( hora >= 19 && hora <= 24 ) {
  saludo = "Buenas noches";
}
else if ( hora >= 0 && hora <= 5 ) {
  saludo = "Durmiendo";
}
else {
  saludo = "No es un horario";
}
console.log ( saludo );

