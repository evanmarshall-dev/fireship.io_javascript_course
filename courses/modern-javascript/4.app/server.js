// The dotenv package allows us to access the environment variables that we defined in the .env file.
// We use the environmental variables in the next step when we initialize the openai SDK.
import * as dotenv from 'dotenv';

import OpenAI from 'openai';

// We import express which is a framework for building web applications is node.js.
import express from 'express';
import cors from 'cors';

dotenv.config();

// First, we create an openai object and pass in the API key. This also initializes the openai SDK.
const openai = new OpenAI({
  apiKey: process.env.OPENAI
});

// With express, when a request comes in we can apply middleware to it (code which will run on each request). Examples are cors and express.json.
const app = express();
// We want to bring is cors. Cors stands for cross origin resource sharing. It allows us to make requests from our frontend to our backend and is a security mechanism.
app.use(cors());
// Below, express.json is also middleware, which tells our API that is only wants to handle data in JSON format.
app.use(express.json());

// With the middleware configured we can start creating our first endpoint. We need to choose an HTTP method (i.e. POST). This method takes two arguments: 1. string that represents the API URL (i.e. http://localhost:8080/dream). 2. A callback function that takes a request and response object as arguments. This callback function will be called each time someone heads to the URL.

// Async keyword is used in the callback function in order to make it an async function.
app.post('/dream', async (req, res) => {
  try {
    // Access the prompt of the description of the image that the user wants to generate.
    const { prompt } = req.body;

    // Take the above user data and pass it off to the openai API, call the createImage method and pass in the prompt as an argument.
    // Using await on this cause will pause the execution of the function until the API call is complete.
    const aiResponse = await openai.images.generate({
      prompt,
      // Also has argument for the number of images you want generated.
      n: 1,
      // Also an argument for the resolution.
      size: '1024x1024'
    });

    // Once the API call is complete we will get a response object tht contains the image URL.
    const image = aiResponse.data[0].url;
    // Now that we have the URL available we need to send it back to the client (front end or browser) as a response. We do that by calling the send method on the response object. The client or browser will then receive this info as JSON.
    res.send({ image });
  } catch (error) {
    console.error(error);
    // Using optional chaining with ? to grab the response data and the error message otherwise || something went wrong.
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

// Now we need to fire up the server, by calling app.listen followed by the port number.
app.listen(8080, () => console.log('Make art on http://localhost:8080/dream'));
