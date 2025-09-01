//Nested if else Statement min, ,max

// let email = "abc@gmail.com";
// let password = "12345678";

// if (email === "abc@gmail.com") {
//   if (password === "12345678") {
//     console.log("login successfully");
//   } else {
//     console.log("password is not correct");
//   }
// } else {
//   console.log("email invalid");
// }

// // maximum
// let a = 45;
// let b = 60;
// let c = 30;

// if (a > b) {
//   // 45 > 60

//   if (a > c) {
//     // 45 > 30
//     console.log("a is greater than both");
//   } else {
//     console.log("c is greater than both ");
//   }
// } else {
//   if (b > c) {
//     // 60>30
//     console.log("b is greather than both");
//   } else {
//     console.log("c is greater than both");
//   }
// }

// smallest     //dry run for use to check ouput of code with copy and pen 
let a = 45;
let b = 10;
let c = 30;

if (a < b) {
  // 45 < 60
  if (a < c) {
    // 45 < 30
    console.log("a is less than both");
  } else {
    console.log("c is less than both ");
  }
} else {
  if (b < c) {
    // 60<30
    console.log("b is less  than both");
  } else {
    console.log("c is less than both");
  }
}
