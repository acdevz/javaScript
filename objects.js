//singleton object
// const obj = Object.create();
const obj = new Object(); // object constructor
const obj1 = {}; // object literal
console.log(obj);

// Object literal
/* ⭐ */
const key1 = Symbol(1);
let fruit = "apple";
const object = {
    num: 1,
    str: "Hello World",
    obj: {
        "x": 5
    },
    arr: [1, 2, 3],
    "full name" : "Aman Chandra",
    [fruit] : "apple", // computed property
    [key1] : "value1", /* ⭐ */
};
// console.log(object[key1])

// deleting properties
// delete object.num;

// freezing... ❄️
// Object.freeze(object); // object is immutable

// Adding functions...
object.say = () => console.log("Hello World");
object.say();


// Destructring ☀️
const { num, str, "full name" : fname } = object;
console.log(fname); // Aman Chandra
// console.log(num, str); // 1 "Hello World"

// Bracket
// console.log(object["obj"]["x"]); // 5

// Dot
// console.log(object.obj.x); // 5

// Classes and Prototypes
// 
const alice = {
    name: "Alice",
    age: 25,
    __proto__: {
      greet: function() {
        console.log("My name is", this.name);
      }
    }
  };
alice.greet(); // Logs: "My name is Alice"
console.log(alice.__proto__); // true
