// // //function type

// // let num1 = 5;
// // let num2 = 10;

// // // take something return nothing

// // // function sum(a, b) {
// // //   console.log(a + b);
// // // }

// // // sum(num1, num2);

// // // take something return something

// // function sum(a, b) {
// //   console.log("b")
// //   return a+b;// return sum

// // }

// // let result = sum(num1, num2);// and store the sum in result

// // console.log(result)//15

// // console.log(sum(1,2))

// // function result(num) {
// //   if (num % 2 == 0) {
// //     return "EVEN";
// //   } else {
// //     return "ODD";
// //   }
// // }

// // for (let i = 1; i <= 10; i++) {
// //   console.log(result(i));
// // }

// //arrow function (short cut  ) if i have to return something from arrow function

// let sum = (a, b) => a + b;//directly return the value

// console.log(sum(15, 5));

// let userName = "batman"

// let show = user => user

// console.log(show(userName))

// // functions are block of code   {                }

// //IIFE( Immediately Invoked Function Expression)

// (function () {
//   console.log("hello");
// })();

// (function() {
//   var privateVariable = 'I am private';
//   console.log(privateVariable); // Output: I am private
// })();

// global scope
// block scope
// functional scope

// block scope
// var a = "batman";

// {
//   a = "superman";
//   console.log(a);
// }

// console.log(a);

// function scope

let a = 4;
function show() {
  let a = 5;
  console.log(a);
}
show();

console.log(a);
