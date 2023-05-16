/* Async/await can be seen as syntax sugar on top of promises, when we mark a function with 
the async keyword, it becomes an asynchronous function that automatically returns a promise. 

Within an async function, we can use the await keyword to pause the execution of the code 
until the promise is resolved or rejected. 

By employing await, we refactor the .then().catch().finally() into a try catch*/

button.addEventListener('click', async () => {
    // Show a loading spinner
    spinner.style.display = 'block';
    try {
        let response = await fetch('https://api.example.com/items');
        let items = await response.json();
        // Update the UI with the new items
        displayItems(items);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Hide the loading spinner
        spinner.style.display = 'none';
    }
});


// Using explicit .then() and .catch() with promises
fetchData()
  .then(response => {
    // Handle the response
    console.log("Response:", response);
    return processData(response);
  })
  .then(result => {
    // Handle the processed data
    console.log("Processed data:", result);
  })
  .catch(error => {
    // Handle any errors
    console.error("Error:", error);
  });

// Using async/await
async function fetchDataAndProcess() {
  try {
    const response = await fetchData();
    console.log("Response:", response);

    const result = await processData(response);
    console.log("Processed data:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAndProcess();

/* The JavaScript engine switches to executing other code until the "await"ed promise is settled, 
at which point it resumes executing the remaining code within the async function. */

async function example() {
    try {
        return new Promise((resolve, reject) => {
            throw new Error('Oops!');
        });
    } catch (err) {
        console.error(err);
    }
}
example(); // The error is not caught, and it rejects the promise returned by example.

async function example2() {
    try {
        return await new Promise((resolve, reject) => {
            throw new Error('Oops!');
        });
    } catch (err) {
        console.error(err);
    }
}
example2(); // The error is caught, and the promise returned by example2 is resolved.

