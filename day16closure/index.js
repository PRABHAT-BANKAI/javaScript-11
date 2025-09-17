// closure work with nested functions

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

function outer() {
  console.log("outer function ");

  let a = 14; // these variable are created in outerfunction
  let b = 5;

  function inner() {
    console.log("inner function ");

    return a + b; // i access the sorrounding state of outer function because of lexical environement
  }

  return inner;
}

let innerFunction = outer();

let result = innerFunction();
console.log(result);


//example
// react (js library)
// class function in js
