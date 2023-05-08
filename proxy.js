//refer object.js

const alice = new Proxy({name: "Alice", age: 25}, {
    get: (target, key) => {
      if (key === 'greet') {
        return () => console.log("My name is", target.name);
      } else {
        return target[key];
      }
    },
  });
  alice.greet(); // Logs: "My name is Alice"