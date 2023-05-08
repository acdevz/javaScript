const object = {
    "num": 1,
    "str": "Hello World",
    "obj": {
        "x": 5
    }
};

// Destructring
const { num, str} = object;
console.log(num, str); // 1 "Hello World"

// Bracket
console.log(object["obj"]["x"]); // 5

// Dot
console.log(object.obj.x); // 5

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

