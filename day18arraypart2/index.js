// // // Array With Functions Push ,Pop, shift, unshifts, Splice string function
// // // these all methods modify the original array 

// // // let arr = []

// // // arr[0] = 12
// // // arr[1] = 14
// // // arr[2] = 3



// // // console.log(arr)



// // let arr = [1,2,3]

// // //push method of array (inbuild js function )

// // arr.push(4)// add element in the last of the array


// // arr.push(56)



// // arr.pop()// remove the element from the last the array
// // console.log(arr)





// // // shift

// // let store =arr.shift()//Removes the first element from an array

// // // console.log(store)

// // arr.unshift(45)// Elements to insert at the start of the array.Inserts new elements at the start of an array, and returns the new length of the array.


// // console.log(arr)




// //splice  


// let array = [12,23,34,45,56,67,78,89,91]

// array.splice(1,3,"apple","grapes")// starging argument is 1 and delete count is 3


// console.log(array)// splice always manipulate orignally or modify array



//string data type  in js 


let str = "hello world" //split method cannot directly change my variable value

// output is [ "hello", "world"]


//split
let result = str.split(" ")// split method return a array which have elements from string


console.log(result)


let userName = "           sinchan nuhara             "

console.log(userName.trim())//Removes the leading and trailing white space and line terminator characters from a string.



//join method of array 


let store = ["hello","world"]

console.log(store.join("-"))
