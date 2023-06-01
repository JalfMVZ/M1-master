function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [2, 2, 3, 3, 5] Ya que 2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var num = [1];
  var n = 2

  while (num !== 1) {
    if (num % n === 0) {
      num = num / 0
      num.push(n)
    } else {
      n++
    }
  }
  return num
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  var len = array.length;
  var swap = true;

  for (var i = 0; i < len - 1 && swap; i++) {
    swap = false;
    for (var j = 1; j < len - i; j++) {
      if (array[j - 1] > array[j]) {
        var temp = array[j - 1];
        array[j - 1] = array[j]
        array[j] = temp;
        swap = true;
      }
    }
  }

  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arrayeglos
  // Devolver el array ordenado resultante
  // Tu código:

  var len = array.length;

  for (var i = 1; i < len; i++) {
    var j = i;

    while (j > 0 && array[j - 1] > array[j]) {
      var temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j--;
    }
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arrayeglos
  // Devolver el array ordenado resultante
  // Tu código:

  var len = array.length;

  for (var i = 0; i < len - 1; i++) {
    var min = i;
    for (var j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    temp = array[i]
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};