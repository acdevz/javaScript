/* Function composition is a concept in functional programming where the output of one function
 is used as the input of another function. 
 
 In other words, it's the process of chaining two or more functions together so that the result 
 of one function becomes the input to the next. */

const compose = (...functions) => {
    return (x) => {
        if(functions.length === 0) return x;
        let input = x;
        for (let fn of functions.reverse()) {
            input = fn(input);
        }
        return input;
    }
}



// Function Composition using Array.reduceRight()
// const reducedCompose = (...functions) => {
//     return (x) => {
//         return functions.reduceRight((acc, fn) => {
//             return fn(acc)
//         }, x)
//     }
// }
//or
const reducedCompose = (...functions) => {
    return (x) => functions.reduceRight((acc, fn) => fn(acc), x)
}



// f(g(h)) ...
let myCompose = reducedCompose(x => x + 1, x => x * x, x => 2 * x);
console.log(myCompose(4));

