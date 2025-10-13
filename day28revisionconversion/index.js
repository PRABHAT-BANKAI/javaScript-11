// let number ='1234a'

// let result = Number(number)

// console.log(number)
// console.log(result)// Not a Number

// let str = "asd"

// let booleanValue = Boolean(str)
// console.log(booleanValue)

// // manualy conversion  //explicit

// console.log(11+"11")// concatenate string implicit // corciean
// console.log(11-"11")

// console.log(+"121")

// console.log(5 + +"25"); // + this symbol is a shortand to convert in number from string

// console.log(5 + true); // true =1 , false = 0

// console.log(true - false);//1

//Write a code snippet that assigns a value to a variable marks, then checks if the marks are greater than or equal to 75. If true, assign "Passed" to another variable result, otherwise assign "Failed". Display result using innerHTML

let marks = 50;
let result = "";
if (marks >= 75) {
  result = "passed";
} else {
  result = "failed";
}
console.log(result);
