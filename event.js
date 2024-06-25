/* Capturing -> bubbling */
/* useCapture set to false, by default */

document.getElementById('grandparent').addEventListener('click', (event) =>{
    console.log("Grandparent!");
}, true);
document.getElementById('parent').addEventListener('click', (event) =>{
    event.stopPropagation();
    console.log("Parent!");
}, true);
document.getElementById('child').addEventListener('click', (event) =>{
    console.log("Child!");
}, true);

/* bubbling: child to grandparent */
/* capturing: grandparent to child */




/* Event delegation is a technique of attaching 
    an event listener to a parent element 
    instead of attaching it to the child element. */
//1
document.querySelector('#category').addEventListener('click', (event) =>{
    if(event.target.tagName === 'LI'){
        window.location.href = `/#${event.target.id}`;
    }
});

//2
document.querySelector('#form').addEventListener('keyup', (event) =>{
    if(event.target.dataset.uppercase != undefined){
        event.target.value = event.target.value.toUpperCase();
    }
});

/* 
saves memory and processing time
less code
    but,
some events don't bubble up.
*/