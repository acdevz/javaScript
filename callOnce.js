const once = (fn) => {
    let hasBeenCalled = false;
    return arguments => {
      if (hasBeenCalled) {
        return undefined;
      } else {
        hasBeenCalled = true;
        return fn(arguments);
      }
    }
  };

  const say = (name) => console.log(`Hello ${name}`);

  const said = once(say); // Hello World
  said('World');
  said('World');