'use strict';
// parseInt
function BinarioADecimal(num) {
   return parseInt(num, 2);
}
/* La función parseInt() se utiliza para analizar una cadena de texto 
y convertirla en un número entero luego se le pasa el argumento num, 
que es la cadena de texto que representa un número en formato binario
*/


function DecimalABinario(num) {
   return num.toString(2);
}

/*La instrucción return devuelve el resultado de la expresión num.toString(2) 
y la función toString() se utiliza para convertir un número en una representación de cadena de texto */


var decimal = 4
var binario = DecimalABinario(decimal);
console.log("El numero decimal  " + decimal + "en binario es: " + binario )


module.exports = {
   BinarioADecimal,
   DecimalABinario,
}; 
 