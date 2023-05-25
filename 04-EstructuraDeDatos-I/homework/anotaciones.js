// Estructura de Datos |

// Son millones de datos (recursion, identificar estructura de datos , Queues & Stacks)

// Recursion 

// Una funcion que se llama a si misma 
// caso base o caso corte (break)
// necesitamos que la funcion retornada tenga argumentos diferentes




function recursion(num) {
    if (num > 0) {
        console.log("Ejecutado() ", num)
        return recursion(num - 1)
    } // infinito 
    else return "Finalizado";
}


console.log(recursion(7));


// Recursion es un Bucle  <-> Iterador
//For in // For each // For of // For map , while , filter, find (todos bucles) <-> iteradores

// Ejemplo arr

const arr = [2, 3, 4, 5]

function sumArr(arr) {
    if (arr.length === 0) {
        return 0
    } else {
        let sum = arr.pop() // saca elemento del  array
        return sum + sumArr(arr)
    }
}
console.log(sumArr(arr))


// Estructura de Datos

// {}
// []
// set
// mapa ["name" => "mau"]

// Stack

// tomo un arry y sigo este sentido logico 
// LIFO -> Stack

// const arr [1,2,3]
// arr.push(4)
// arr.pop()

// Modelos

/* Arreglos
   LinkedList
   Árboles
   Pilas
   Colas
   Tablas Hash
   Grafucis
    */