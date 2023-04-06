/* Promise is an object representing eventual completion or failure of an asynchronous operation. */

let cart = ["Roadster T-shirt", "US Polo Assn. Sneaker"];
// let cart = [];

//attatching callbacks to promises.
createOrder(cart)
.then(orderID => {
    console.log(`Your order id is ${orderID}.`);
    return orderID;
})
.then(orderID => paymentgateway(orderID))
.then(paymentStatus => console.log(paymentStatus))
.catch(err => console.log(err.message)) //it handles any error in the promise chain above.
.then(() => console.log("Thank you for shopping with us!"));

//use => arrow function to avoid return keyword.

function createOrder(cart){
    valid = (cart) => Array.isArray(cart) && cart.length;

    return new Promise(function(resolve, reject){
        if(!valid(cart)){
            const err = new Error("Add items to cart before creating order.");
            reject(err);
        }
        console.log("Processing your order. Please wait...");
        //random unique orderID
        const orderID = "ALX2265";
        setTimeout(function(){
            resolve(orderID);
        },5000);
    })
}

function paymentgateway(orderID){
    return new Promise(function(resolve, reject){
        console.log(`Processing payment of your order, ${orderID}.`);
        setTimeout(function(){
            resolve("Payment Successful!");
        }, 5000);
    })
}