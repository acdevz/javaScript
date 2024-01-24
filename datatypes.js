"use strict"

const id = "4563254"
let name = "Aman"
let age = 19

// console.table([
//     id,
//     name,
//     age,
// ])

// Number -> 64 bit floating point number (double precision)
// BigInt -> 64 bit integer
// String -> UTF-16
// Boolean -> true or false
// undefined -> undefined
// null -> object
// Symbol -> unique identifier

// Object -> key value pairs
// Function -> callable object

// typeof operator
// console.log(typeof null) // object ? bug ? maybe : historical reasons


/* Conversions */

/* Number Conversion */

let value = "123"
console.log(typeof value)
console.log(Number(value))

// null -> 0
// undefined -> NaN
// true -> 1
// false -> 0
// string -> whitespaces trimmed, empty string -> 0, otherwise NaN


/* Misc */
console.log(1 + "2") // 12
console.log("1" + 2) // 12
console.log(2 - "1") // 1

console.log(2 + 6 + "5" + 2 + 6) // 8526
console.log(2 + 6 + "5" + (2 + 6)) // 8526
console.log(2 + 6 + "5" + 2 * 6) // 8512
console.log(2 + 6 + "5" + 2 / 6) // 852.3333333333334
console.log(2 + 6 + "5" + 2 - 6) // 852
console.log(2 + 6 + "5" + 2 + 6 - 6) // 852
console.log(2 + 6 + "5" + 2 + 6 * 6) // 85236

console.log(+true) // 1
console.log(+"") // 0
console.log(+[]) // 0
console.log(+{}) // NaN
// console.log(+Symbol()) // TypeError


