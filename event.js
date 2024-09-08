/* Capturing -> bubbling */
/* useCapture set to false, by default */

document.getElementById('grandparent').addEventListener('click', (event) =>{
    console.log("Grandparent!");
}, false);
document.getElementById('parent').addEventListener('click', (event) =>{
    event.stopPropagation();
    console.log("Parent!");
}, false);
document.getElementById('child').addEventListener('click', (event) =>{
    console.log("Child!");
}, false);

/* bubbling: child to grandparent */
/* capturing: grandparent to child */


/* Event Propagation Insights:
   1. Capturing Phase: Events travel from the window to the target element.
   2. Target Phase: Event reaches the target element.
   3. Bubbling Phase: Events bubble up from the target to the window.

   In this example:
   - All listeners use capturing phase (true as third argument).
   - The order of execution is Grandparent -> Parent -> Child.
   - event.stopPropagation() in Parent prevents the event from reaching Child.

   Best Practices:
   - Use capturing sparingly; bubbling is more common and usually sufficient.
   - Be cautious with stopPropagation(); it can break expected behaviour.
   - Consider using event delegation for better performance with many similar child elements.
*/


/* Event delegation is a technique of attaching 
    an event listener to a parent element 
    instead of attaching it to the child element.
    we use event bubbling to our advantage.
*/
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