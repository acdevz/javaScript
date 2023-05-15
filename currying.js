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


/* Use Cases! */
// Reusable utility functions:
const add = a => b => a + b;
const add2 = add(2);
console.log(add2(5));

// Event handling: In event-driven programming, event handlers with specific configurations,

var curry = function(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      }
  
      return curried.bind(this, ...args);
    };
  };
  
  /**
   * function sum(a, b) { return a + b; }
   * const csum = curry(sum);
   * csum(1)(2) // 3
   */
  