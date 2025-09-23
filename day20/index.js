// // // object ek non primitive data type (reference) // object is a key value pair

// // let student = {
// //   studentName: "prabhat",
// //   age: 45,
// //   subject: "maths",
// //   city: "delhi",
// // };

// // console.log(student);
// // console.log(typeof student);

// // // dot notation in object
// // // console.log(student.studentName);
// // // console.log(student.age);
// // // console.log(student.city);

// // // bracket notation

// // console.log(student["studentName"])
// // console.log(student["age"])
// // console.log(student["subject"])

// // let obj = {
// //   userName:"batman",
// //   powers:"bat",
// //   boolean :false

// // }

// let student = {
//   studentName: "prabhat",
//   age: 45,
//   subject: "maths",
//   city: "delhi",
// };

// // methods = Object.key(student)// Object.values

// let store = Object.keys(student);
// let store2 = Object.values(student);
// console.log(store2);

let object = {
  userName: "batman",
  subjects: ["english", "maths", "html"],

  show: function () {
    console.log("hello from school");
  },

  testSubject: {
    hindi: 45,
    maths: 77,
    science: 66,
    enlglish: 88,
  },
};

let arrray = ["hindi", "maths", "science", "english"];

console.log(object.subjects[2]);


console.log(object.testSubject[arrray[1]])//object.testSubject["maths"]

// object.show();
