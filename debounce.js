// https://assets.leetcode.com/uploads/2023/04/08/screen-shot-2023-04-08-at-11048-pm.png
/* Debouncing,
    ensures that time-consuming tasks do not fire so often,
    it limits the rate at which a function gets invoked. */


let count = 0;

const fetch = (data) => {
    // fetch results
    console.log("fetching...", data.value);
}

/* Approach 1: setTimeout + clearTimeout */
// const debounce = (fn, delay) => {
//     let timer;
//     return function(...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, delay);
//     }
// }

/* Approach 2: setInterval + clearInterval */
const debounce = (fn, delay) => {
    let interval;
    return function(...args) {
        const lastCall = Date.now()
        clearInterval(interval);
        interval = setInterval(() => {
            if (Date.now() - lastCall >= delay) {
                fn(...args);
                clearInterval(interval);
            }
        }, 1);
    }
}

const betterfetch = debounce(fetch, 500);