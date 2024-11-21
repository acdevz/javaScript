// Define a string to search
const str = "The quick brown fox jumps over the lazy dog.";

/* search() method */
str.search(/the/); // Returns 31

/* match() method */
// Use the match method to find all matches
const matches = str.match(/e/g);
console.log(matches);


/* RegEx Methods */

// test() method
const pattern = /e/gi;

if(pattern.test(str)) {
    console.log("Match found");
} else {
    console.log("Match not found");
}

// exec() method
// let result;
// while((result = pattern.exec(str)) !== null) {
//     console.log(result);
// }