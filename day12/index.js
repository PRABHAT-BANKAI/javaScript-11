// do while

// initalization  int i =1  1step

//2nd step execute
// do{
// execute

// inc/dec
//}while(conditon)

// let i = 1; // 1

// // if condition is false but still one time code will execute
// do {
//   i++;
//   console.log(i); //1//2//3//4//5//
//   //2 //3 // 4 //5 //6
// } while (i <= 5); //2<=5//3<=5 //4<=5 //5<=5 6<=5

//dry run
//2
//3
//4
//5
//6

// for (let i = 1; i <= 12; i++) {
//   if (i % 2 == 1) {
//     console.log(`odd number is ${i}`);
//   }
// }

// prime number ,2,3,5,7,11,13,17,23,// apne aap sae divide ho skae and 1 sae divide ho skae prime number
// ek count co -prime number 1 is a co prime number

let number = 17;
let count = 0;

for (let i = 1; i <= number; i++) {

  if(number %i==0){
    count++
  }

}


if(count === 2){
  console.log("is prime number")
}else{
  console.log("is not a prime number")
}

