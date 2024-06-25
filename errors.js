function checkname(name){
    if(name.trim() === ""){
        throw new Error("Name cannot be empty");
    }
    return true;
}

try{
    const name = "";
    if(checkname(name)){
        console.log("Name is valid");
    }
}catch(err){
    console.log(err.message);
}

/* AggregateErrors */


let err1 = new Error("Error 1");
let err2 = new Error("Error 2");

try{
    throw new AggregateError([err1, err2]);
}
catch(err){
    if(err instanceof AggregateError)
        console.log(err.errors)
    for(let e of err.errors){
        console.log(e.message);
    }
}

/*  error-first callbacks */
