import express from 'express';
import cors from 'cors';

import { BSD } from './database';
import Comment from './models/comment';
import { giveSentiment } from './sentiment';

require('dotenv').config();
const database = new BSD();
const app = express();
const port = 3500;
const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient({
  apiKey: process.env.API_KEY_NATURAL_LANGUAGE,
});

app.use(express.json());
app.use(cors({ origin: '*', credentials: true })); // Origin set * for demo purposes

app.get('/admin/comments', async (req, res) => {
  const comments = await database.comments.find().toArray();
  res.json(comments);
});

app.post('/user/comment', async (req, res) => {
  if (!req.body.username) {
    res.status(400).send({ error: 'username missing' });
    return;
  }
  if (!req.body.text) {
    res.status(400).send({ error: 'comment missing' });
    return;
  }
  const comments = await database.comments.insertOne(
    new Comment(
      req.body.username,
      req.body.text,
      await giveSentiment(req.body.text, client)
    )
  );
  res.json(comments).status(200);
});

async function main() {
  try {
    // HINT: to drop the database, please uncomment next line for demo purposes
    // await database.comments.drop();
    app.listen(port, () => {
      return console.log(`🚀 Express is listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('error:', JSON.stringify(err));
  }
}

main().catch((err) => {
  console.error(JSON.stringify(err));
});
