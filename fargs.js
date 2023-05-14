/* Syntax Required for Transforming Functions */

// Rest Syntax
function sum(...nums) {
    let sum = 0;
    for (const num of nums) {
      sum += num;
    }
    return sum;
  }

//Argument Syntax : not with arrow functions!
// arguments is a special iterable value bound to the function.
function sum() {
    let sum = 0;
    for (const num of arguments) {
      sum += num;
    }
    return num
  }

  sum(1, 2, 3); // 6