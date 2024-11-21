class UserOne{
    readonly userId: number;
    // #name: string; // -> private field proposal
    private name: string;
    constructor(name: string, id: number){
        this.name = name;
        this.userId = id;
    }
}

let userOne = new UserOne('John', 1);
// userOne.name

/* ⭐ production code */

class UserToo{
    constructor(public name: string, private id: number){}
}

let userToo = new UserToo('John', 1);