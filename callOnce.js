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