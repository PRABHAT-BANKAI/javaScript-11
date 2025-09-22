// Array With Functions(methods) (map ,filter, foreach, indexof, findindex ,includes, every, some)

// HOF (high order function ) those method who have callback function as an argument
//map
//filter
//foreach

let array = [12, 1, 2, 3, 55, 6, 7];

//map
// map is a high order function

// 1step : internally create new array [24,2,6,110,12,14]
// 2step : update new array with user operation
// 3rdstep :  return new array which is created ;
let newArray = array.map((element) => {
  // console.log("1")
  return element + "batman";
}); //arguement

console.log(newArray);

// array.map((function(){

// }))

// function sum() {
//   //parameters
// }
// sum(); //arguments

//filter work as same map function ()(based on conditon it will return  if condition is true it will return that element otherwise false value not be return )

let result = array.filter((element) => {
  return element % 2 === 0;
});

console.log(result);

let sum = 0;
// foreach could not return any thing //Performs the specified action for each element in an array.
array.forEach((element) => {
  sum += element;
});

console.log("sum=", sum);

//indexof

let array2 = [10, 11, 23, 42, 51, 88, 23, 55];

const indexNumber = array2.indexOf(123);
console.log(indexNumber);

//findindex

let store = array2.findIndex((element) => {
  return element ===400;
});

console.log(store);
