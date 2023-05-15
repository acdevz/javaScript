/* Approach 1 */
function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}

/* Approach 2 : with no return */
async function sleep(milliseconds) {
	await new Promise(res => setTimeout(res, milliseconds)); 
}