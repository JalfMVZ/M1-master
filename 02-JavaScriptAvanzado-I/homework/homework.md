# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
}; // 10 - 8 - 9 - 10 - 1
c(8, 9, 10);
console.log(b);
console.log(x);
```
La diferencia entre declarar una variable con var y asignarle un valor directamente está relacionada con el alcance y la visibilidad de la variable

Cuando se declara una variable con var, se realiza una declaración de variable local con alcance de función. Esto significa que la variable solo será visible dentro de la función donde se declara, o si se declara fuera de una función, será una variable global accesible en todo el ámbito del programa. Al utilizar var, la variable se iza (hoisting), lo que significa que la declaración de la variable se mueve al principio del ámbito en el que se encuentra, pero su asignación mantiene su posición original en el código.

Por otro lado, cuando se asigna un valor directamente a una variable sin utilizar var, let o const, se crea una variable global implícita si no existe una variable con ese nombre en el alcance actual. En este caso, la variable se vuelve global y está disponible en todo el ámbito del programa.

En el código proporcionado, la declaración de x sin var en la línea x = 1; crea una variable global implícita x y le asigna el valor 1. Por otro lado, las declaraciones de a, b y c utilizando var crean variables locales dentro del ámbito de ejecución de la función donde se encuentran. En este caso, a, b y c son variables locales para la función c y no tienen relación con las variables globales con los mismos nombres.

Es importante tener en cuenta que el uso de variables globales puede llevar a problemas de mantenimiento y dificultades para rastrear y depurar errores en el código. Por lo tanto, se recomienda limitar el uso de variables globales y, en su lugar, utilizar variables locales adecuadamente declaradas con var, let o const según corresponda

```javascript
console.log(bar); 
console.log(baz);
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2; // undefine  - Hola 
```
<!--  -->

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // Franco

```
<!--  -->

```javascript
var instructor = "Tony";
console.log(instructor);
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor);
  }
})();
console.log(instructor); // Tony, Franco , Tony
```
<!--  -->

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor);
  console.log(pm);
}
console.log(instructor);
console.log(pm); // The flash , reverse flash , the flash , franco
```
<!--  -->

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" = 2
"2" * "3"  6
4 + 5 + "px" = 9px
"$" + 4 + 5 = $45
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
{}[0] = undefined
parseInt("09") = 9
5 && 2 = 2
2 && 5 = 5
5 || 0 = 5
0 || 5 = 5
[3]+[3]-[10] = 23
3>2>1 = false
[] == ![] = true
```
<!--  -->

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}



test(); // undefined , 2
```
<!--  -->

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false); // undefined
```
<!--  -->
### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test()); // Aurelio de Rosa , Juan Perez
```
<!--  -->
### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing(); // 1 4 3 2
```
<!--  -->
</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
