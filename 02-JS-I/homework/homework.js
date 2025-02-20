// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = (10 - 5) === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion =(10 * 4)  === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 0;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return console.log('Hola Mundo!');
}

devolverString();

function suma(x, y) {
   console.log(x + y );
  
}
suma(5, 10);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  
  console.log(x - y );

}
resta(9 , 2);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  
  console.log(x * y );
}
multiplica(9, 2);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  console.log(x / y );
}
divide(10, 2);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:

  if( x === y ) {
    return true;
  }else {
    return false;
  }
  
}
sonIguales(8, 8);


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:

  if (str1.length === str2.length ) {
    return true;
  }else {
    return false;
  }
  
}
tienenMismaLongitud('hola', 'laho');

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:

  if (num < 90) {
    return true;
  } else {
    return false;
  }
  
}
menosQueNoventa(80);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:

  if (num> 50) {
    return true;
  } else {
     return false;
  }

  
}
mayorQueCincuenta(50)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:

 let  result = x% y;

 console.log(result);
  
}

obtenerResto(5, 2);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

  if(num% 2 === 0){
     return true;
  }else {
    return false;
  }
  
}
esPar(4)

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:

  if(num% 2 !== 0){
    return true;
 }else {
   return false;
 }
  
}
esImpar(5)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  num = num * num;
  console.log(num);
  }
 elevarAlCuadrado(1);


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:

  num = Math.pow(num,3)
  console.log(num);
  
}

elevarAlCubo(3)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:

  num = Math.pow(num,exponent);
  console.log(num);
  
}
elevar(5, 2);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  num = Math.round(num);
console.log(num);
  
}
redondearNumero(1.89);


function redondearHaciaArriba(num) {
 num = Math.ceil(num)
  console.log(num);
}

redondearHaciaArriba(2.1)

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()

 return Math.random(0 , 1)
  
}

numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 

  if (numero > 0) {
    console.log('Es positivo');
  } else if (numero === 0) {
    return false;
  } else {
    console.log('Es negativo');
  }
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
}

esPositivo(9);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

  if (str.length > 0) {
    return console.log(str + '!');
  }

}
agregarSimboloExclamacion('Hola mundo');

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:

   console.log (nombre,  apellido);
   console.log (nombre + ' -> ' +  apellido);
  
}
combinarNombres('Ezequiel', 'Arevalo');


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:

  console.log( `${nombre + ' -> ' + ' hola ' + nombre + '!'}`)
  
}
obtenerSaludo('Ezequiel');

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:

  let result = alto * ancho;
  console.log(result)
  
}

obtenerAreaRectangulo(4 , 7);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

  let result = lado * 4
  console.log(result);
}
retornarPerimetro(2);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let result = (base * altura)/ 2;
  console.log(result)

}
areaDelTriangulo(2 , 6)


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

  var dolar = 1.20;
  euro = dolar * euro ;
console.log( 'Euro: ' ,  euro)

  
}

deEuroAdolar(1);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

if(letra.length > 1){
  console.log('Dato incorrecto');
}else {

  if ( letra === 'a' || letra === 'e' ||  letra === 'i' || letra === 'o' || letra === 'u' ) {
    console.log('Es vocal');
      
  } else {
    console.log('Dato incorrecto');
  }
}

 
  
}

esVocal('a');


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
