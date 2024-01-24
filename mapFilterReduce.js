
/* map() */
const bins = rads.map((x) => x.toString(2)); //Simple Syntax!
console.log(bins);



/* filter() */
const oddsandabove2 = rads.filter((x) => {
    return x % 2 && x > 2;
})

console.log(oddsandabove2);



/* Mega method! */
/* reduce() : to return a single "value"(object, arr, literal) out of the array */

const ins = [1, 2, 3, 4, 5];

//sum...
// const outs = ins.reduce((sum, i) => {
//     // sum += i;
//     // return sum;
//     return sum + i;
// }, 0);

//max...
const outs = ins.reduce((max, i) => {
    if( i > max) max = i;
    return max;
}, 1);

console.log(outs);

/* map from reduce!!! */
console.log(
    ins.reduce((outs, i) => {
        outs.push(i*2);
        return outs;
    }, [])
)



/* users database */

const users = [
    {firstname: "John", lastname: "Doe", age: 34},
    {firstname: "Lorem", lastname: "Ipsum", age: 22},
    {firstname: "Aman", lastname: "Chandra", age: 20},
    {firstname: "Shraddha", lastname: "Kapoor", age: 20}
];

//{34:1, 22:1, 20:2}

console.log(
    users.reduce((obj, user) => {
        if(obj[user.age]){
            obj[user.age]++;
        }else{
            obj[user.age] = 1;
        }
        return obj;
    }, {})
);

//user's name whose age > 20 : Chainnnnnnnnnnnnnnnnning :D
console.log(
    users.filter((user) => {
        return user.age > 20;
    })
    .map((user) => user.firstname)
);
// OR
console.log(
    users.reduce((arr, user) => {
        if(user.age > 20){
            arr.push(user.firstname);
        }
        return arr;
    }, [])
);