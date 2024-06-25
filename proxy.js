//refer object.js

const alice = new Proxy({name: "Alice", age: 25}, {
    get: (obj, prop) => {
      if (prop === 'greet') {
        return () => console.log("My name is", obj.name);
      } else {
        return target.prop;
      }
    },
    set : (obj, prop, value) => {
        if(prop === 'name'){
            if(value.trim() === ""){
                throw new Error("Name cannot be empty");
            }
        }
        obj[prop] = value;
    }
  });
  alice.greet(); // Logs: "My name is Alice"
  alice.age = 26;
  // alice.name = "";
  console.log(alice)