const once = (fn) => {
    let hasBeenCalled = false;
    return function(...args){
      if (hasBeenCalled) {
        return undefined;
      } else {
        hasBeenCalled = true;
        return fn(...args);
      }
    }
  };

  const say = (name) => console.log(`Hello ${name}`);

  const said = once(say); // Hello World
  said('World');
  said('World');