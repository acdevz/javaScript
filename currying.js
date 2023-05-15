/* Currying in JavaScript transforms a function 
with multiple arguments into a nested series of 
functions, each taking a single argument. 

What is it for? 
    Currying helps you avoid passing the same variable multiple times */

/* using bind()... */

// let multiply = function(a, b) {
//   console.log(a * b);
// }
// let multiplyBy2 = multiply.bind(this, 2);
// multiplyBy2(5);
// let multiplyBy3 = multiply.bind(this, 3);
// multiplyBy3(5);


/* using closures... */

// function multiply(a) {
  //     return function(b) {
//         console.log(a * b);
//     }
// }
// let multiplyBy2 = multiply(2);
// multiplyBy2(5);
// let multiplyBy3 = multiply(3);
// multiplyBy3(5);


/* Use Cases!
  Reusable utility functions:
  Event handling: In event-driven programming, event handlers with specific configurations,
  API calls customizations */


//1. Currying with Recursive Function Calls
// const curry = (fn) => {
//     return function curried(...args) {
//     if (args.length >= fn.length) {
//         return fn(...args);
//     }
//     return (...nextArgs) => {
//         return curried(...args, ...nextArgs);
//     }
//   }
// }


//2. Currying with Recursive Function Calls + Bind Method
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return curried.bind(this, ...args);
  }
}

let multiply = function(a, b) {
  return (a * b);
}
let m1 = curry(multiply);
console.log(m1(2)(3));
console.log(m1()()(2)(3));
console.log(m1(2, 3));


/* Different implementations of curry */

// var curry = function (fn) {
//   return function curried(...args) {
//     if (args.length === 0) {
//       return fn(...args);
//     }

//     return (...nextArgs) => {
//       if (nextArgs.length === 0) {
//         return fn(...args);
//       }

//       return curried(...args, ...nextArgs);
//     };
//   };
// };