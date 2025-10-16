// //Using a while loop, create a program that finds and prints the first 5 numbers divisible by both 3 and 7.

// // let i = 1;
// // while (i <= 120) {
// //   if (i % 3 == 0 && i % 7 == 0) {
// //     console.log(i);
// //   }
// //   i++
// // }

// // // 21;
// // // 42;
// // // 63;

// //closure // concept // bundle of function which is enlosed together closure will create lexical environment (inner function have access or reference of outer function variables )

// function outer() {
//   console.log("outer");
//   let a = 12;
//   let b = 15;

//   function inner() {
//     console.log("inner");
//     console.log(a + b);
//   }

//   inner();
// }

// outer();
// //outer
// //inner
// 27;



function outer(){
    console.log("outer function");
    inner()        
}

function inner(){
    console.log("inner function");
}

outer();

//the ans is first wll come to print inner function because of hmne ne inner function koh outer function mei first call karaya hai then will be print outer function

// ans of inner fun , outer fun
function kitty(){
    console.log("hello kitty");

    function tom(){
        console.log("hello tom")
    }
    tom()
    
    
}

kitty()