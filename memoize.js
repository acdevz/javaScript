/* A memoized function is a function that will never be called twice with the same inputs. 
Instead it will return a cached value. Memoization only works correctly for pure functions.

A pure function is defined as function that always returns the same output 
given the same inputs and doesn't have any side-effects. */

/* Memoization in Web D:
    Caching website files,
    caching API calls, MOREEE on it later!
    unchanged react components */

/* A potential downside of memoizing network requests is the risk of data staleness. */

/* Memoization in JS:
    1. Using a cache object
    2. Using a Map object
    3. Using a WeakMap object */

// 1. Using a cache object
// const memo = (fn) => {
//     const cache = {};
//     return (...args) => {
//         let key = '';
//         for (const arg of args) {
//             key += arg + '.';
//         }
//         if (key in cache) {
//             console.log('👀');
//             return cache[key];
//         }
//         cache[key] = fn(...args);
//         return cache[key];
//     }
// }


// 2. Using a Map object
// const memo = (fn) => {
//     const cache = new Map(); 
//     return (...args) => {
//         let key = JSON.stringify(args);
//         if (cache.has(key)) {
//             console.log('👀');
//             return cache.get(key);
//         }
//         cache.set(key, fn(...args));
//         return cache.get(key);
//     }
// }



// 3. Using a WeakMap object
// const memo = (fn) => {
//     const cache = new WeakMap(); 
//     return (...args) => {
//         let key = JSON.stringify(args);
//         if (cache.has(key)) {
//             console.log('👀');
//             return cache.get(key);
//         }
//         cache.set(key, fn(...args));
//         return cache.get(key);
//     }
// }


//4. One liner
const memo = (fn, cache = {}) => (...args) => cache[args.join()] ?? (cache[args.join()] = fn(...args));


function addTo80(n) {
    return n + 80;
}
const memoizedAddTo80 = memo(addTo80);
console.log('1', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(5));
