/* Debouncing,
    ensures that time-consuming tasks do not fire so often,
    it limits the rate at which a function gets invoked. */

let count = 0;

const fetch = (data) => {
    // fetch results
    console.log("fetching...", data.value);
}

const debounce = (fn, delay) => {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

const betterfetch = debounce(fetch, 500);