"use strict";
​/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  *- size: retorna la cantidad total de nodos del árbol
  *- insert: agrega un nodo en el lugar correspondiente //TODO: de tipo BST (binary search tree)
  *- contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  *- depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera 
  de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
  Nota: si no se provee ningún parámetro, hará el recorrido //* "in-order" por defecto.
  *- breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro 
  del directorio homework.
*/
// RECURSIÓN <-> BST
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
//TODO: de tipo BST (binary search tree)
// { value: 20, left: {l:null, right:{}}, right:  { value: 31, left: null, right: null } }.insert(31)
BinarySearchTree.prototype.insert = function (value) {
  //
  if (value > this.value) {
    //
    if (!this.right) this.right = new BinarySearchTree(value);
    else this.right.insert(value);
  } else {
    // y los menores o iguales van a la izquierda
    if (!this.left) this.left = new BinarySearchTree(value);
    // left: BinarySearchTree { value: 4, left: null, right: null }
    else this.left.insert(value);
    // { value: 4, left: null, right: { value: 12, left: null, right: null } }
  }
};
// { value: 20, left: {value: 4, left:{value:2, l:null,r:null}, right:null}, right:null}.size()
// retorna 1 + {value: 4, left:{value:2, l:null,r:null}, right:null}.size()
//         1 +    retornar 1 +  {value:2, l:null,r:null}.size()
//         1 +      1  +      1 = 3
BinarySearchTree.prototype.size = function () {
  // si solo tiene el root retorno 1
  if (!this.left && !this.right) {
    return 1;
  }
  if (!this.right) return 1 + this.left.size();
  if (!this.left) return 1 + this.right.size();
  if (this.left && this.right) return 1 + this.left.size() + this.right.size();
};
//   BST { value: 20,left:{ value: 4,left: null,right: { value: 12, left: null, right: null } },
//                   right: { value: 31, left: null, right: null } }.contains(42)
BinarySearchTree.prototype.contains = function (value) {
  // 42
  if (value === this.value) return true; //
  if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      // { value: 31, left: null, right: null } }.contains(42)
      return this.right.contains(value);
    }
  } else {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};
/*
 var result = [];
breadthFirstForEach(function(val){ result.push(val); })
*/
const resultGlobal = [];
//! function (result=[]) { <- genera para la RECURSION una especie de memoria que persiste
// [20, 4, 2, 12, 31]
BinarySearchTree.prototype.depthFirstForEachPreOrder = function (result = []) {
  result.push(this.value);
  if (this.left) this.left.depthFirstForEachPreOrder(result);
  // this.left && this.left.depthFirstForEachPreOrder(result);
  this.right && this.right.depthFirstForEachPreOrder(result);
  return result;
};
// function(val){ result.push(val); }
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (order === "pre-order") {
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
  } else if (order === "post-order") {
    if (this.left) this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
    cb(this.value);
  } else {
    if (this.left) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    this.right && this.right.depthFirstForEach(cb, order);
  }
​
};
//   BST { value: 20,left:{ value: 4,left: null,right: { value: 12, left: null, right: null } },
//                   right: { value: 31, left: null, right: null } }.breadthFirstForEach([],[])
// result=[20, 4, 31,12 ]
​
// { value: 4,left: null,right: { value: 12, l: null, r: null }}.breadthFirstForEach([20],[{ value: 31, left: null, right: null }])
// { value: 31, left: null, right: null }.breadthFirstForEach([20, 4],[,{ value: 12, l: null, r: null }])
// { value: 12, l: null, r: null }.breadthFirstForEach([20, 4, 31, ],[])
BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) {
   if(this.left) queue.push(this.left)
   if(this.right) queue.push(this.right)
   // queue = []
   cb(this.value)
   if(queue.length>0){
      let subTree = queue.shift()  // { value: 12, l: null, r: null }
      subTree.breadthFirstForEach(cb,queue)
   }
};
// [20, 4, 31, 2, 12]
​
const tree_test = new BinarySearchTree(20);
console.log(tree_test);
tree_test.insert(4);
console.log(tree_test);
tree_test.insert(12);
tree_test.insert(2);
console.log(tree_test);
tree_test.insert(31);
console.log(tree_test);
console.log(tree_test.size());
console.log(tree_test.contains(31));
// [20, 4, 2, 12, 31]
console.log(tree_test.depthFirstForEachPreOrder());
// var depth = [];
// tree.breadthFirstForEach(function(val){ depth.push(val); })
​
// breadthFirstForEach(cb)
// cb(value)
​
// No modifiquen nada debajo de esta linea
// --------------------------------
​
module.exports = {
  BinarySearchTree,
};
​
/*
BinarySearchTree { value: 20,
  left: 
   BinarySearchTree { value: 4,
     left: null,
     right: BinarySearchTree { value: 12, left: null, right: null } },
  right: BinarySearchTree { value: 31, left: null, right: null } }
​
  BST { value: 20,left:{ value: 4,left: null,right: { value: 12, left: null, right: null } },right: { value: 31, left: null, right: null } }
*/
​
 //TODO: origin MODE 
// BinarySearchTree.prototype.breadthFirstSearch = function (result=[], queue = []) {
//    if(this.left) queue.push(this.left)
//    if(this.right) queue.push(this.right)
//    // queue = []
//    result.push(this.value)
//    if(queue.length>0){
//       let subTree = queue.shift()  // { value: 12, l: null, r: null }
//       subTree.breadthFirstForEach(result,queue)
//    }
// };