import express from 'express';

import { BSD } from './database';
import Comment from './models/comment';
import { giveSentiment } from './sentiment';

const app = express();
const port = 3000;

//to parse JSON body
app.use(express.json());

app.get('/admin/comments', async (req, res) => {
  const comments = await BSD.comments.find().toArray();
  res.json(comments);
});

app.post('/user/comment', async (req, res) => {
  const comments = await BSD.comments.insertOne(
    new Comment(
      req.body.username,
      req.body.text,
      await giveSentiment(req.body.text)
    )
  );
  res.json(comments);
});

async function main() {
  try {
    // await BSD.comments.drop();
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
