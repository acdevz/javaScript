const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);

arr.push(6);

console.log(arr.toString());

arr.shift(); // remove first element
arr.unshift(0); // add element to the beginning


/* ⭐ */

arr.slice(1, 3); // [2, 3]
console.log(arr);

arr.splice(1, 3); // [2, 3, 4]
console.log(arr); // splice mutates the original array


/* ⭐⭐ */

const fruits = ["apple", "banana", "orange", "mango"];
const vegies = ["potato", "tomato", "onion", "garlic"];

// const myBasket = fruits.concat(vegies);
const myBasket = [...fruits, ...vegies]; // spread operator
console.log(myBasket);


/* ⭐⭐⭐ */

const randomArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]], [10, 11, 12]];
console.log(randomArray.flat(Infinity));


/* ⭐⭐⭐⭐ */

// Array.isArray(randomArray); // true
// Array.isArray({}); // false
console.log(Array.from("Hello World!"));