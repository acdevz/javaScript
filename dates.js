const date = new Date();

// console.log(date);

// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString());

let newDate = new Date(2021, 0, 1);
newDate = new Date("2021-01-01"); //ISO format
// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now(); //Unix timestamp in milliseconds
// console.log(myTimeStamp);

// console.log(date.getTime());


/* ⭐ */

let formattedDate = date.toLocaleString("default",{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

console.log(formattedDate);