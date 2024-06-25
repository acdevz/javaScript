const user = {
    username : 'batman',
    password : 'Alfred1960ROCKS!',
    shouldOpenBatCave : function (){
        console.log(this.username);
    }
}

user.shouldOpenBatCave();

const jsUser = function(username, password){
    this.username = username;
    this.password = password;

    // return this;
}

// class jsUser {
//     constructor(username, password) {
//         this.username = username;
//         this.password = password;

//         // return this;
//     }
// }


// const batman = jsUser('batman', 'Alfred1960ROCKS!');
// const superman = jsUser('superman', 'Alfred1960ROCKS!');

// solulu ?
const batman = new jsUser('batman', 'Alfred1960ROCKS!');
const superman = new jsUser('superman', 'Alfred1960ROCKS!');
console.log(batman);