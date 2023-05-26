'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null; //  cabeza de la lista como null
  this.tail = null; // cola de la lista como null
}

function Node(value) {
  this.value = value; // valor del nodo
  this.next = null; // enlace al siguiente nodo, inicialmente null
}

LinkedList.prototype.add = function (value) {
  const newNode = new Node(value); //  nuevo nodo con el valor proporcionado

  if (!this.head) {
    // si la lista está vacía
    this.head = newNode; // el nuevo nodo se convierte en la cabeza
    this.tail = newNode; // el nuevo nodo también se convierte en la cola
  } else {
    this.tail.next = newNode; // el enlace next del nodo actual de la cola al nuevo nodo
    this.tail = newNode; // actualiza la cola para que sea el nuevo nodo
  }
};

LinkedList.prototype.remove = function () {
  if (!this.head) {
    // si la lista está vacía
    return null; // nada que eliminar, así que retorna null
  }

  let removedValue;

  if (this.head === this.tail) {
    // caso de un solo nodo en la lista
    removedValue = this.head.value; // guarda el valor del nodo a eliminar
    this.head = null; // estable la cabeza y la cola como null
    this.tail = null;
  } else {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      // recorre la lista hasta el nodo anterior al nodo de la cola
      currentNode = currentNode.next;
    }
    removedValue = this.tail.value; // guarda el valor del nodo de la cola a eliminar
    this.tail = currentNode; // actualiza la cola al nodo anterior
    this.tail.next = null; // establece el enlace next del nuevo nodo de la cola como null
  }

  return removedValue; // retorna el valor del nodo eliminado
};

LinkedList.prototype.search = function (param) {
  let currentNode = this.head;
  while (currentNode) {
    if (typeof param === 'function') {
      // si el parámetro es una función
      if (param(currentNode.value)) {
        // llama a la función pasando el valor del nodo actual como argumento
        return currentNode.value; // si la función retorna true, encuentra un nodo con el valor buscado, así que lo retornamos
      }
    } else if (currentNode.value === param) {
      // si el parámetro es un valor
      return currentNode.value; // si encuentra un nodo con el valor buscado lo retorna
    }
    currentNode = currentNode.next; // pasa al siguiente nodo
  }
  return null; // si no encuentra el valor buscado, retorna null
};


function Node(value) {}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
