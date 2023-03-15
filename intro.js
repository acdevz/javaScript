//Execution Context: 
//  Creation Phase/ Memory Creation Phase/ Environment Creation Phase
//  and Execution Phase/ Code Execution Phase

//Hoisiting: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

console.log(a); // undefined

var a = 2; //hoisted

console.log(printHello()); //Hello JavaScript
console.log(printNamaste()); //ReferenceError: printNamaste is not defined

function printHello() {
    return "Hello JavaScript";
}

//Not hoisted
printNamaste = () => {
    return "Namaste JavaScript";
}

console.log(b); // ReferenceError: b is not defined

let b = 0; //not hoisted