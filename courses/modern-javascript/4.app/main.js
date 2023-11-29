import './style.css';

// Grab the form from the DOM.
const form = document.querySelector('form');
// Listen to when the user submits the form. Then define a callback that runs each time the submit event takes place and give us access to the event data. Also make it an async function so we can use the await keyword inside of it.

// Create a spinner function that will run an animation inside the submit button using the keyframes CSS property.
function showSpinner() {
  // Grab the button from the DOM.
  const button = document.querySelector('button');
  // Set its state to disabled so the user cannot click it or submit the form.
  button.disabled = true;
  // In the inner HTML it will add the tags dreaming in with a span that has the spinner class.
  button.innerHTML = 'Dreaming... <span class="spinner">🧠</span>';
}
// Create a function to hide the spinner.
function hideSpinner() {
  // Grabs the same button as above, but sets the disabled state to false so the user can click it again.
  const button = document.querySelector('button');
  button.disabled = false;
  button.innerHTML = 'Dream';
}
// Now we need to show the spinner at the right time so we will add it to the submit event listener. At the button of the event listener, we will call the hideSpinner function.

form.addEventListener('submit', async (e) => {
  // When a form is submitted, the default behavior is to refresh the page. We don't want that, so we prevent it.
  e.preventDefault();
  // Now we want to show a spinner to the user so they know the app is working. We will create a function for that.
  showSpinner();
  // Now extract the data from the form (i.e. the prompt of the image description).
  // We can do this by instantiating a new FormData object and passing it the form as the input. This provides us with a data structure that behaves like a JS map.
  const data = new FormData(form);
  // Make a request to the API using JS built in function, fetch. We point the fetch function to our localhost endpoint, which returns a promise (await) that will place the value in the response variable.
  const response = await fetch('http://localhost:8080/dream', {
    // Fetch takes a variety of options with the HTTP method of post being one of the most important.
    method: 'POST',
    headers: {
      // We are dealing with a JSON API, so we need to set the content type to JSON.
      'Content-Type': 'application/json'
    },
    // Define the body of the request with the form data. Wrap in JSON.stringify to convert the JS object into a JSON string.Then define an object with a value of prompt that grabs the prompt value from the form using the get method.
    body: JSON.stringify({
      prompt: data.get('prompt')
    })
  });

  // Error handling. The response it returns has a value of ok, which means no errors happened and we run the result and image code.
  if (response.ok) {
    // The above chunk of code makes a request to the API and give us a response with the data, including the image URL. We can access the image by awaiting the response JSON.
    const { image } = await response.json();
    // Now that we have the image we need to insert it in the UI. We do that using query selector and grabbing the result div in the HTML.
    const result = document.querySelector('#result');
    // Now we can modify its inner HTML with an image tag with the src being the above image URL.
    result.innerHTML = `<img src="${image}" width="512" />`;
  } else {
    // If the status is not ok then we know something went wrong and we run response.text to get the error message. Then we can alert the error in the browser.
    const err = await response.text();
    alert(err);
    console.error(err);
  }

  // Now we want to hide the spinner.
  hideSpinner();
});
