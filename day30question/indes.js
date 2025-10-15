// Detect Perfect Numbers A perfect number is a positive integer that is equal to
// // the sum of its proper divisors (excluding the number itself). Write a program using a
// // for loop to check if a given number is a perfect number.
// //  // Input: number = 28 // Output: 1 + 2 + 4 + 7 + 14 = 28

//   28

let number = 28; // 1+3+5 = 9

let sum = 0;
for (let i = 1; i < number; i++) {
  if (number % i == 0) {//28%7 ==0
    //15%1 == 0
    sum += i;
  }
}

if(sum == number){
  console.log("perfect number")
}else{
  console.log("is not perfect number")
}


console.log(28%7)//0

console.log(28/7)//4