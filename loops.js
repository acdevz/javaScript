/* for-of */

const languages = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
for(const language of languages) {
    console.log(language);
}
// of is used for iterable objects, and object literals are not iterable
myObjs = {
    a: 1,
    b: 2,
    c: 3
}
// not for objects

let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for(const [key, val] of map) {
    console.log(key, val);
}

/* for-in */

for(const key in myObjs) {
    console.log(key);
}

for(const key in languages) {
    console.log(key);
}

// not for maps

/* forEach */

languages.forEach((language, index, arr) => {
    console.log(language, index, arr);
});