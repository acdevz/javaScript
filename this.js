// Global object
// console.log(this)


const obj = {
    username: "js.ig",
    getThis: function(){
        console.log(this);
    }
}
// obj.getThis();


function funThis(){
    console.log(this);
};
funThis();

const thisNamedFun = function(){
    console.log(this);
};
thisNamedFun();

const thisArrowFun = () => {
    console.log(this);
};
thisArrowFun();