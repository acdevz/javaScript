/* "Higher order functions are functions that take other functions as arguments : callbacks!" */

rads = [3, 2, 1, 5];

// const area = function(r){
//     return Math.PI * r * r;
// }
// const circumference = function(r){
//     return 2 * Math.PI * r;
// }

// const calculate = function(arr, logic){
//     let output = [];
//     for(let i = 0; i < arr.length; i++){
//         output.push(logic(arr[i]));
//     }
//     return output;
// }

// console.log("Area", calculate(rads, area));

//generic function for all arrs?

Array.prototype.calculate = function(logic){
    let output = [];
    for(let i = 0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

// console.log("Area", rads.calculate(area));

//this is what? a map() function.