'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var len = array.length;

  // Caso base: si el array tiene longitud menor o igual a 1, ya está ordenado
  // por definición, por lo que se devuelve el mismo array.
  if (len <= 1) {
    return array;
  }

  // Se elige un elemento del array como pivote, en este caso el primer elemento.
  var pivot = array[0];

  // Se crean dos arrays vacíos, uno para almacenar los elementos menores que el pivote
  // (llamado "left") y otro para almacenar los elementos mayores o iguales que el pivote
  // (llamado "right").
  var left = [];
  var right = [];

  // Se recorre el array a partir del segundo elemento (índice 1).
  for (var i = 1; i < len; i++) {
    // Si el elemento actual es menor que el pivote, se añade al array "left".
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      // Si el elemento actual es mayor o igual que el pivote, se añade al array "right".
      right.push(array[i]);
    }
  }

  // Se realiza la recursión llamando a quickSort sobre los arrays "left" y "right",
  // y se concatenan los resultados con el pivote en el medio para obtener el array
  // completamente ordenado.
  return quickSort(left).concat(pivot, quickSort(right));
}



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var len = array.length; // Obtiene la longitud del array recibido como parámetro

  if (len <= 1) {
    return array; // Si la longitud del array es menor o igual a 1, se considera ordenado y se devuelve sin hacer nada más
  }

  var middle = Math.floor(len / 2); // Calcula el índice medio del array

  // Divide el array en dos partes: la parte izquierda va desde el índice 0 hasta el índice middle - 1
  var left = array.slice(0, middle);

  // Divide el array en dos partes: la parte derecha va desde el índice middle hasta el final del array
  var right = array.slice(middle);

  // Aplica recursivamente mergeSort a las dos mitades del array
  right = mergeSort(right);
  left = mergeSort(left);

  var arr = []; // Crea un nuevo array vacío para almacenar los elementos ordenados

  // Combina las partes izquierda y derecha en orden en el array arr
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift()); // Agrega el primer elemento de la parte izquierda a arr y lo elimina de left
    } else {
      arr.push(right.shift()); // Agrega el primer elemento de la parte derecha a arr y lo elimina de right
    }
  }

  // Agrega los elementos restantes de left y right al final del array arr
  return arr.concat(left, right);


}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
