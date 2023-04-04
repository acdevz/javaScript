// an empty file is a js file!

/* 
JS engine (V8, Chrome) creates global object and this. along with global exectution context.
global object: window in browser, global in node
this keyword: window in browser, global in node
 */

var a = 10;

/*
undefined is a primitive value that represents the absence of a value.
undefined is a property of the global object. In browsers it is window.undefined.

don't assign undefined to a variable!
*/

/* 
Lexical environment: where something sits physically in the code you write.
lexical environment = environment record + reference to lexically outer environment

Scope Chain:
Chain of lexical environments: global -> outer environment -> inner environment
Local -> Closure -> Global
*/

/* 
let vs var
Temporal Dead Zone: let and const are hoisted but not initialized.
    the phase between hoisting and initialization is called TDZ.
*/

/* 
Errors:
    ReferenceError: var is not defined, let is not yet initialized
    SyntaxError: initializer already been declared, missing initializer in const declaration
    TypeError: assignmet to const variable, cannot read property of undefined
*/

/* 
Block: statements grouped together to be used at where js expects a single statement.
*/