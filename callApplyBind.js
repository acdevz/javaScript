let user1 = {
    firstname : "Aman",
    lastname : "Chandra"
}

let user2 = {
    firstname : "Punjabi",
    lastname : "Tadka"
}

const details = function(city, state){
    console.log(`${this.firstname} ${this.lastname} from ${city}, ${state}.`);
}

details.call(user1, "Lucknow", "UP"); // call takes arguments one by one
details.apply(user2, ["Pathankot", "Punjab"]); // apply takes array as argument

// bind returns a function, doesn't call it
details.bind(user1, "Lucknow", "UP")(); //1
details.bind(user1, "Lucknow")("UP");   //2


//my implementation of bind, Polyfill for bind
Function.prototype.bindy = function(...args){
    let context = this;
    let params = args.slice(1);
    return function(...fargs){
        context.apply(args[0], [...params, ...fargs]);
    }
}
details.bindy(user1, "Lucknow")("UP");


/* A polyfill is a piece of code (usually JavaScript on the Web) 
used to provide modern functionality on older browsers that do 
not natively support it. */

let multiply = function(a, b) {
    console.log(a * b);
  }
  
// multiply.call(this, 2, 3);
// multiply.apply(this, [2, 3]);
// multiply.bind(this, 2)(3);
