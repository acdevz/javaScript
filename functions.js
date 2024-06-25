/* function statement */
function f(){
    console.log("'f' called!");
}

/* function expression */
var g = function(){             //not hoisted!
    console.log("'g' called!");
}

/* anonymous function */
// function(){
//      function statements require a name! Used with function expression?
// }

/* named function expression */
var h = function myName(){
    console.log("'h' called!");
}
//myName() : ReferenceError, myName is not defined!

/* first-class function */
/* When functions are treated like any other variable i.e.
        a function can be passed as an argument to other functions,
        can be returned by another function and,
        can be assigned as a value to a variable.
*/

/* ⭐⭐⭐ */
// Rest and Spread operators

function sum(...args){
    console.log(args);
}

/* ⭐⭐⭐🤩⭐⭐⭐ */
// IIFE : Immediately Invoked Function Expression

(function IIFE(){
    // named IIFE
    console.log("IIFE called!");
})(); // this ; is important!

(() => console.log('Call 2!'))();

((name) => console.log(`hi ${name}!`))("JS");

if(true) console.log("ok"), console.log("not ok");

