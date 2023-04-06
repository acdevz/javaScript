/* js is synchronus and single threaded language! 

welcome to asynchronous world in synchronous language! */

// setTimeout(function(){
//     console.log("Hi!");
// }, 5000);

// function x(y){
//     console.log("x");
//     y()
// }

// x(function(){
//     console.log("y");
// });

// function attachEventListener(){
//     let count = 0;
//     document.getElementById("btn").addEventListener("click", function(){
//         console.log("clicked", ++count, "times!");
//     });
// }
// attachEventListener();



/* Issues with callbacks:
    callback hell: callbacks inside another callback inside another... Whenever there are multiple dependent Asynchronous operations it will result in a lot of nested callbacks.
    inversion of control: the control of the program is inverted. The function that is passed as a callback is executed by the function that receives it.
*/
