// Approach 1: Call Function Inside New Promise
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            fn(...args)
                .then(resolve)
                .catch(reject);
        });
    };
};

// Approach 2: Promise Race : Promise.race function. It accepts an array of promises and returns a new promise that is settled as soon as any of the promises in the array are settled.
var timeLimit = function (fn, t) {
    return async function (...args) {
        const timeLimitPromise = new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });
        const returnedPromise = fn(...args);
        return Promise.race([timeLimitPromise, returnedPromise]);
    };
};

// Approach 3: Handle Clearing Timeout
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            fn(...args)
                .then(resolve)
                .catch(reject)
                .finally(() => clearTimeout(timeout));
        })
    }
};

// Approach 4: Async/Await + Clearing Timeout
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise(async (resolve, reject) => {
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            try {
                const result = await fn(...args);
                resolve(result);
            } catch (err) {
                reject(err);
            }
            clearTimeout(timeout);
        });
    };
};