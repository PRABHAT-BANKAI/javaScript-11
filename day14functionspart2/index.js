//FUNCTION WITH FOUR WAYS RECURSION

// 1 normal function
// 2 anonymous function
// 3 arrow function
// 4 variable function

// normal function

// show()// i can call function before createing function in normal function

// function show(){
//   console.log("hello world")
// }

// show()

// variable  function with anonymous function(function (){ "function without name"})

// show()//ReferenceError: Cannot access  'show'  before initialization and in variable function
// let show = function () {
//   console.log("hello variable function ")
// };

// show()

// arrow function (variable function ,anonymous function with different syntax)

// syntax of arrow function
// let show = ()=>{
//   console.log("hello arrow function ")
// }

// show()

//parameters Function (with Arguments) Return type in function switch programs

function sum(a,b,c) {
  // parameters (so we also give any name )
  console.log(a, b, c);
  console.log(a + b + c);
}

let a = 1;
let b = 2;
let c = 3;

sum(a, b, c); //where the function  i call (isnide of parentesis is called arguments)

sum(15,5,2)


sum(25,5,1)


// return keyword use in function 

//prelearning 


// let batman = function  (){

// }