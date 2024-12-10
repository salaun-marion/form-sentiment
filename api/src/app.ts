import express from 'express';

import { BSD } from './database';
import Comment from './models/comment';
import { giveSentiment } from './sentiment';

const app = express();
const port = 3000;

app.get('/admin/comments', async (req, res) => {
  const comments = await BSD.comments.find().toArray();
  res.json(comments);
});

app.post('/user/comment', async (req, res) => {
  const comments = await BSD.comments.find().toArray();
  res.json(comments);
});

async function main() {
  try {
    await BSD.comments.drop();

    const text1 = 'Dont like it';
    const text2 = 'Love it';

    await BSD.comments.insertOne(
      new Comment('user35678', text1, await giveSentiment(text1))
    );
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
