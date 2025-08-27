// //increment // decrement

// let a = 5;

// let value1 = a;

// let value2 = --a; // prefix // first increment the value then assigning the value

// let value3 = a--; // postfix  // first assinging the value then increment the value

// console.log(a); //3
// console.log(value1); //5
// console.log(value2); //4
// console.log(value3); //4

// // // Assignment operators

// // let sum = 0;

// // sum = 4+1

// // console.log(sum)

// // let x = 10

// // let y = 20

// // x = y

// // console.log(x)

// let sum = 0;

// // sum = sum + 5;

// sum += 5;

// sum-=2
// // sum = sum -2

// console.log("sum is", sum);

// Comparison operators // true or false
// >
// <
// >=
// <=
// ==
// ===
// !=
// !==

console.log(5 < 2);

console.log(5 >= 5);

console.log(4 == 5); // compare both value is same or not

console.log(5 === 5); // strickly  check value and data type

console.log(5 == "5");
console.log(5 === "5");

console.log(2 != 5);
console.log("5" !== 5); // stricktly check value and data type not equal

// logical operator
//&&  AND    return false value and condition left to right
//|| OR      return true value and condition

console.log(12 > 5 && 22 > 23 && 5);

console.log(0 || 22 > 23 || 5);

// // conversion  explicit  // kisika data type manually change krdena

let number = "15";

console.log(number);

let result = Number(number);
console.log(result);

// concatinate
console.log("15" + (5 + 45)); //implicit  corciean // BODMAS
console.log(12 + 5 + 5 + "7");

// javascript is single threaded langyuage and dynamic type  line to code read then execute

let value = 12;
console.log(value);
let result2 = String(value);

console.log(result2);

let value2 = 45;

let boolean = Boolean(0);

console.log(boolean);

let userName = "batman";

let result3 = Number(userName);// return new value 

console.log(result3);// NaN  not a number 

console.log(typeof result3)
