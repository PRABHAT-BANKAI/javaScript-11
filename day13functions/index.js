// // JS  is a single threaded language dynamic type  top sae bottom tak line by line execute because of interpreter(compiler)

// // console.log(1)
// // console.log(2)
// // console.log(3)
// // console.log(4)
// // console.log(5)

// //5
// //1
// //2
// //3

// //function (block of code )

// //normal function

// function show() {
//   //create
//   console.log(1);
// }

// function show2() {
//   console.log(2);
// }

// function show3() {
//   console.log(3);
// }

// function show4() {
//   console.log(4);
//   console.log("batman");
// }

// show(); // i call that function // when i call tha function then block of function is run
// show4();
// show3();
// show();
// show4();

// function sum() {
//   let a = 12;
//   let b = 15;

//   console.log(a + b);
// }

// sum();
// sum();

// hero();

// function hero() {
//   console.log("superman");
// }

// 1 phase declaration
//2 phase intialziation

for (let i = 1; i <= 5; i++) { //i =3  3<=5
  let str = "";//""
  for (let j = 1; j <= i; j++) { // 1<= 3 // 2bar loop
    str = str + j// str = "22"
  }

  console.log(str);
}
