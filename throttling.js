const counter = () => {
    let count = 0;
    return () => {
        console.log('fire', ++count);
    }
}
let fire = counter();

const throttle = (callback, delay = 1000) => {
    let wait = false;
    return (...args) => {
        if(wait) return;
        callback.apply(this, args);
        wait = true;
        setTimeout(() => {
            wait = false;
        }, delay);
    }
}
// window.addEventListener('resize', throttle(fire, 1000)); //cheap
// window.addEventListener('resize', () => {fire()}); //expensive

document.getElementById('btn').addEventListener('click', throttle(fire));