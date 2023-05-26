'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

// 5 * 4 * 3 * 2 * 1 =              4 * 3 * 2 * 1
// Recursion -> corte ! 1 = 1  !0 = 1

// Función recursiva para calcular el factorial de un número
function nFactorial(n) {
  if (n === 0 || n === 1) {
    // Caso base: el factorial de 0 y 1 es 1
    return 1;
  } else {
    // multiplicar n por el factorial de n-1
    return n * nFactorial(n - 1);
  }
}

// Función recursiva para calcular el enésimo número de la secuencia de Fibonacci
function nFibonacci(n) {
  if (n === 0) {
    // Caso base: el primer número de Fibonacci es 0
    return 0;
  } else if (n === 1) {
    // Caso base: el segundo número de Fibonacci es 1
    return 1;
  } else {
    // sumar los dos números de Fibonacci anteriores
    return nFibonacci(n - 1) + nFibonacci(n - 2);
  }
}


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/


// Clase Queue (cola) que sigue el principio FIFO
class Queue {
  constructor() {
    this.queue = []; // Array para almacenar los elementos de la cola
  }

  // Agregar un valor al final de la cola
  enqueue(value) {
    this.queue.push(value);
  }

  // Remover y devolver el primer valor de la cola
  dequeue() {
    if (this.queue.length === 0) {
      // Si la cola está vacía, retornar undefined
      return undefined;
    } else {
      // Remover y retornar el primer elemento de la cola
      return this.queue.shift();
    }
  }

  // Obtener el tamaño (cantidad de elementos) de la cola
  size() {
    return this.queue.length;
  }
}



/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
