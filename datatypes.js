"use strict"

const id = "4563254"
let name = "Aman"
let age = 19

// console.table([
//     id,
//     name,
//     age,
// ])

/* Primitives */
// Number -> 64 bit floating point number (double precision)
// BigInt -> 64 bit integer e.g. 123n
// String -> UTF-16
// Boolean -> true or false
// undefined -> undefined
// null -> object
// Symbol -> unique identifier

/* Non Primitives */
// Array -> ordered collection of data
// Object -> key value pairs
// Function -> callable object

// typeof operator
// console.log(typeof null) // object ? bug ? maybe : historical reasons


/* ------------------ Conversions ------------------ */

/* Number Conversion */

let value = "123"
console.log(typeof value) 
/* https://262.ecma-international.org/5.1/#sec-11.4.3 */
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


/* ------------------ Comparisons ------------------ */

// == vs ===
// == -> loose equality operator, type conversion, coercion
// === -> strict equality operator, no type conversion, no coercion

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

/* why? cause comparison operators convert null to a number, 0 */

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false
