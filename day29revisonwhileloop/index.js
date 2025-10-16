// //intialization
// // condition
// // inc dec

// // vairable with initalization let a = 1
// // let a = 1

// // while (a <= 5) {//1<=5//2<=5//3<=5//4<=5//5<=5//6<=5
// //   console.log(a);//1//2//3//4//5

// //   a++; // create inc increement in block of while //6
// // }

// // console.log("end")

// // let a = 1;

// // while (a <= 5) {//1<=5//2<=5//3<=5//4<=5//5<=5//6<=5
// //   a++;//2//3//4//5//6

// //   console.log(a);//2//3//4//5//6
// // }

// // console.log("end");

// //exit loop  do while // ek bar toh execute krega hi krega

// //initlaization
// // exection
// //increment
// // conditon check

// let a = 1

// do{

//   console.log(a)//1//2//3//4//5
//   a++//2//3//4//5//6
// }while(a<=5)//6<=5

let array = ["batman", "superman", "ironman"];
function show(userName) {//batman//superman//iron// udefined
  //paramater

  if (userName === "ironman") {//superman === ironman
    console.log(userName); // ironman
  }
}

for (let i = 0; i < array.length; i++) {
  show(array[i]); //arguments//batman//superman// array[3] //undefined
}


