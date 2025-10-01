// let array = [1, 2, 3, 4, 5];

// // console.log(array[0]);
// // console.log(array[1]);
// // console.log(array[2]);
// // console.log(array[3]);
// // console.log(array[4]);

// // let sum = array[0] + array[1] + array[2] + array[3] + array[4];
// // console.log(sum)

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   //5<5 false  i=5

//   // console.log(array[i])//array[4]== 5
//   // sum = sum + array[i]
//   sum += array[i];//2

// }

// // sum = "123"

//   console.log(sum)//15

let count = 0;

// for (let i = 1; i <= 10; i++) {
//   //nested loop
//   for (let j = 1; j <= 10; j++) {
//     count++; //10//20//30
//   }
// }

for (let i = 1; i <= 5; i++) {//i=2
  //nested loop
  for (let j = 1; j <= i; j++) {//2<=1false
    count++; //3
  }
}

console.log(count);
