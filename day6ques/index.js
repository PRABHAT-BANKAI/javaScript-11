let maths = 55;
let science = 23;
let chemistory = 20;
let history = 70;

let average = (maths + science + chemistory + history) / 4; // BODMAS

console.log(average);

let x = 5;

let y = 2;

x += 4;

console.log(x);

console.log(5 % 11);

// || &&  > && then ||

console.log((45 > 3 && 5 == 5) || 0 || (45 == "45" && 32 < 55));

// True || 0 ||  True

console.log(1 + 2 + 3 + "4"); // concatinate // it will add with string value
console.log("1" + 2 + 3 + 4);

console.log("15" - 5); //10 // implicit corcion (automatic conversion of data types during operations or comparisons, without explicit instructions from the developer)

// shortand string to convert number

console.log(5 + +"25"); // + this symbol is a shortand to convert in number from string

console.log(5 + true); // true =1 , false = 0

console.log(true - false);

let heroName; // undefined

heroName = "superman";

console.log(heroName);

let firstWord = "summer";
let secondWord = "vacation";

let result = firstWord + secondWord;

console.log(result); // "summervacation"

// let a = 10;

// let b = 20;

// a=  20
// b = 10

// let temp = a; // 10// third variable swap a and b

// a = b; // 20

// b = temp;

// console.log(a)
// console.log(b)


// console.log("hello"+true)

// console.log( 15+5 +"12")// concetinate
// console.log("15"+5+12)



//a = 15
// b = 20


let a = 15;
let b = 20;

a = a+b // 35
b = a-b//   35-20 // 15

a = a-b // 35 - 15 // 20

console.log("a",a)
console.log("b",b)