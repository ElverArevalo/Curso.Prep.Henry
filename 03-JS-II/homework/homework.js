// No cambies los nombres de las funciones.

const { multiplica } = require("../../02-JS-I/homework/homework");

function obtenerMayor(x, y) {

  x = 4;
  y = 3;

  if ( x > y ){
    console.log(' X = ', x, ' es Mayor a ',' Y = ' , y);

  }else if( x===y) {
    console.log(' X = ', x, ' es igual a  ', ' Y = ' , y);
  }else{
    console.log(' X = ', x, ' es Menor ', ' Y = ' , y);
  }
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

}

obtenerMayor();


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

  if (edad >= 18) {
    console.log(' Persona con edad ', edad, ' es Allowed ');
  } else {
    console.log(' Persona con edad ', edad, ' es Not allowed ');
  }

}

mayoriaDeEdad(18)

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  onLine = 1;
  away = 2;
 
  if (status === onLine) {
    console.log('el usuario está Online', onLine);
  }
  else if (status === away) {
    console.log('el usuario está Away', away);
  } else {
    console.log('el usuario está Offline');
  }
}

conection(0);



function saludo(idioma) {

  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === 'ingles') {
    console.log('Hello!');
  }
  else if (idioma === ' mandarin ') {
    console.log('Ni Hao!');
  }
  else if (idioma === 'aleman') {
    console.log('Guten Tag!');
  } else {
    console.log('Hola!');
  }

}
saludo('aleman')



function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch (color) {
    case 'blue':
      console.log('This is blue');
      break;
    case 'red':
      console.log('This is red');
      break;

    case 'green':
      console.log('This is green');
      break;

    case 'orange':
      console.log('This is orange');
      break;
    default:
      console.log("Color not found");
      break;
  }
}


colors('green')

function esDiezOCinco(numero) {
verdad = true;
  if ( numero === 5 || numero ===10) {
    console.log( ' es ', numero , verdad  )
  } else {
    console.log( ' es ', numero , !verdad  )
  }
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
 
}

esDiezOCinco(0);


function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

  if (numero < 50 && numero >20){
    return true;

  } else {
    return false
  }
}
estaEnRango(5);

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  if (Math.floor(numero === 1 || numero === -10)) {
    return true;
  } else {
    return false;
  }
}

esEntero(0.5)

function fizzBuzz(numero) {

  if (numero% 3 === 0 && numero% 5 === 0) {
    console.log('fizzbuzz');
  } else if(numero% 3 === 0  ){
    console.log('fizz');
   }else if(numero% 5 === 0  ){
    console.log('buzz');
   } else {
    console.log(numero);
  }


  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
}

fizzBuzz(2);



function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
 //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  
if(num1 === 0 || num2 === 0 || num3=== 0){
  console.error( 'error' );
}
//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
else if( num1 > num2 && num1 > num3 && num1 > 0 && num2 > 0 && num3 > 0) {
   console.log('Numero', num1 , ' es mayor y postivo');
} 
 //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
else if (num1 < 0 ||  num2 < 0 || num3 <  0 ) {
  console.log('Hay  negativos  ' )
} 

//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
else if (num3 > num2 && num3 > num1  ) {
  num3 = num3 + 1;
  console.log( num3 );
} 

else {
  return false
} 
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
}

operadoresLogicos(1 , 2 , 3);



function esPrimo(numero) {

  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  for (var numero = 2; numero <= 13; numero++) {
    var primo = 1;
    var contador = 2;
    while(contador <= numero/2 && primo) {
      if (numero% contador === 0) {
        primo = 0;
        console.log(numero, false)
      }
      contador++;
    }
    if( primo ) {
      console.log( numero, true)
    }
  }
 
}

esPrimo();

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  if (valor ) {
    console.log('Soy verdadero');
  }else {
    console.log('Soy falso');
  }

}
esVerdadero(true);

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  var nunSeis = 6;

  for (var numMulti = 0; numMulti <= 60; numMulti++) {
    var result = nunSeis * numMulti
    console.log(nunSeis + ' X ' + numMulti + ' = ' + result);
  }

}

tablaDelSeis();

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  if (numero.toString().length === 3) {
    return true
  } else {
    return false
  }
}
tieneTresDigitos(235);

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

var limite = 0;
var valor = 5;

do {
  limite++;
  numero = valor * numero;
} while (limite < 8);

console.log(numero);

}
doWhile(2);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
