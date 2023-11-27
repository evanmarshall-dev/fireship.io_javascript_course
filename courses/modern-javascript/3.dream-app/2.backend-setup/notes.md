# Text-to-Image Server

## Notes

First, setup openAI key in `.env` file. Make sure .env is included in your .gitignore file.

Next, install dependencies: dotenv, express, cors and openai:

```javascript
  yarn add dotenv express cors openai
```

Create a `server.js` file to house all the server code. See server.js in the app directory for more info and server setup then run node `server.js`.

### Supplemental Course Notes (from site)

```javascript
import * as dotenv from 'dotenv';
dotenv.config();

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI
});

const openai = new OpenAIApi(configuration);

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/dream', async (req, res) => {
  const prompt = req.body.prompt;

  const aiResponse = await openai.createImage({
    prompt,
    n: 1,
    size: '1024x1024'
  });

  const image = aiResponse.data.data[0].url;
  res.send({ image });
});

app.listen(8080, () => console.log('make art on http://localhost:8080/dream'));
```
