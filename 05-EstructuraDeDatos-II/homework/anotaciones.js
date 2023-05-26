
// Linkedlist -> Se trabaja en objetos {}
/*
{{{{{{{{{{{{{{}}}}}}}}}}}}}} obj anidados <- multidimensional

[[[[[[]]]]]] <- array multidimensionales

*/


// La linkedlist va a contener nodos

const Linkedlist = {
    head: null

}

const nodo1 = { data: [1, {}, {}, {}], next: null }
const nodo2 = { data: [2, {}, {}, {}], next: null }
const nodo3 = { data: [3, {}, {}, {}], next: null }

console.log(Linkedlist);
console.log(Linkedlist.head === null);

Linkedlist.head = nodo1
Linkedlist.head.next = nodo2
Linkedlist.head.next.next = nodo3

console.log(Linkedlist);

// for (const key in Linkedlist) {
//     console.log(key)
// }

let current = Linkedlist;

console.log(current);

// while(){

// }



/* { head: 
   { data: [ 1, {}, {}, {} ],
     next: 
      { data: [ 2, {}, {}, {} ],
        next: { data: [ 3, {}, {}, {} ], next: null } } } } 
*/