// function x(){ // <-- at global
//     var a = 7; // <-- at local

//     function y(){
//         console.log(a); // <-- closure (x)
//     }
//     // a = 4;
//     return y;
//     /* OR
//      return function y(){
//         console.log(a);
//     }
//     */
// }
// // x();
// var z = x();
// z();

// Closure: scope of a function + its lexical scope! bundled togethor.

/* 
function z(){
    var b = 10;
     function x(){ // <-- at global
        var a = 7; // <-- at local
        console.log(b);
        function y(){
            console.log(a,b); // <-- closure (x) <- closure (z)
        }
        y();
    }
    x();
}
z();
 */







/*
Uses of Closures:
    Currying
    functions like once
    memoize
    maintaining state in async
    setTimeouts
    iterators
    ...
*/







/* SetTimeout */

// function x(){
//     var i = 1;
//         for(var i = 1; i < 6; i++){ //problem lies in 'var'!
//         setTimeout(function(){ // <-- closure stores reference to i. So, its too late for i to be 1, 2, 3...
//             console.log(i); // 6 6 6 6 6
//         }, i * 1000);
//     }
// }

//solution?
// function x(){
//     var i = 1;
//         for(let i = 1; i < 6; i++){ //since 'let' is block scoped, it creates a new scope for every iteration.
//         setTimeout(function(){ // <-- closure is created for every let i.
//             console.log(i); // 1 2 3 4 5
//         }, i * 1000);
//     }
// }

//or... enclose the setTimeout in a function!
// function x(){
//     var i = 1;
//     for(var i = 1; i < 6; i++){ 
//         function enclosed(i){
//             setTimeout(function(){ // <-- closure(enclosed) is created for every i.
//                 console.log(i); // 1 2 3 4 5
//             }, i * 1000);
//         }
//         enclosed(i);
//     }
// }

// console.log("i'm faster than the timeout");
// x();






/* Data hiding & encapsulation */

// function counter(){

//     /* Closure! */
//     var count = 0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
//     /* Closure! */
// }

// var counter1 = counter(); //a closure is passed!
// counter1(); // 1
// counter1(); // 2

//could there be a good way?
//function Constructors!

// function Counter(){
//     var count = 0;
//     this.increment =  function(){
//         count++;
//         console.log(count);
//     }
//     this.decrement =  function(){
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter(); //constructor has to be initialised with new keyword.
// counter1.increment(); // 1
// counter1.increment(); // 2
// counter1.decrement(); // 1