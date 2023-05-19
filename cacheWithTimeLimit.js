class TimeLimitedCache {
    cache = {};
  
    set(key, value, duration) {
      const hasUnexpiredValue = key in this.cache && Date.now() < this.cache[key].expiration;
      this.cache[key] = { value, expiration: Date.now() + duration };
      return hasUnexpiredValue;
    }
  
    get(key) {
      if (this.cache[key] === undefined) return -1;
      if (Date.now() > this.cache[key].expiration) return -1;
      return this.cache[key].value;
    }
  
    count() {
      let count = 0;
      for (const entry of Object.values(this.cache)) {
          if (Date.now() < entry.expiration) {
              count += 1;
          }
      }
      return count;
    }
  };


var obj = new TimeLimitedCache()
obj.set(1, 42, 1000); // false
console.log(obj.get(1)) // 42
console.log(obj.count()) // 1
