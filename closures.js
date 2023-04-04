function x(){ // <-- at global
    var a = 7; // <-- at local

    function y(){
        console.log(a); // <-- closure (x)
    }
    // a = 4;
    return y;
    /* OR
     return function y(){
        console.log(a);
    }
    */
}
// x();
var z = x();
z();

// Closure: scope of a function + its lexical scope! bundled togethor.

/* 
function z(){
    var b = 10;
    function x(){ // <-- at global
        var a = 7; // <-- at local
    
        function y(){
            console.log(a,b); // <-- closure (x) <- closure (z)
        }
        y();
    }
    x();
}
z();
*/

/*
Uses of Closures:
    Currying
    functions like once
    memoize
    maintaining state in async
    setTimeouts
    iterators
    ...
*/