import express from 'express';

import { BSD } from './database';
import Comment from './models/comment';

const app = express();
const port = 3000;

app.get('/admin/comments', async (req, res) => {
  const comments = await BSD.comments.find().toArray();
  res.json(comments);
});

async function main() {
  try {
    await BSD.comments.drop();
    await BSD.comments.insertMany([
      new Comment('user35678', 'Dont like it', 0),
      new Comment('user456', 'Love it', 1),
    ]);
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
