// 2

// console.log(bar); 
// console.log(baz);
// foo();
// function foo() {
//   console.log("Hola!");  // Hola!
// }
// var bar = 1;
// baz = 2;

//2.0

// /* var*/ baz = 2;


// function saludar (){
//   console.log(baz);
// }

// saludar()

// var instructor = "Tony";
// console.log(instructor);
// (function () {
//   if (true) {
//     var instructor = "Franco";
//     console.log(instructor);
//   }
// })();
// console.log(instructor); 

// var instructor = "Tony";

// let pm = "Franco";
// if (true) {
//   var instructor = "The Flash";
//   let pm = "Reverse Flash";
//   console.log(instructor);
//   console.log(pm);
// }
// console.log(instructor);
// console.log(pm); 

// 6 / "3" = 2;
// "2" * "3"  6;
// 4 + 5 + "px" = 9px;
// "$" + 4 + 5 = $45;
// "4" - 2 = 2;
// "4px" - 2 = NaN;
// 7 / 0 = Infinity;
// {}[0] = undefined;
// parseInt("9") = 9;
// 5 && 2 = 2;
// 2 && 5 = 5;
// 5 || 0 = 5;
// 0 || 5 = 5;
// [3]+[3]-[10] = 23; 
// 3>2>1= false;
// [] == ![] = true;



// function test() {
//   console.log(a);
//   console.log(foo());

//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }



// test();

var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false); // undefined