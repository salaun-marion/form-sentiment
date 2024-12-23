import express from 'express';
import cors from 'cors';
import { BSD } from './database';
import Comment from './models/comment';
import { giveSentiment } from './sentiment';

export function makeApp(client: any, database: BSD) {
  const app = express();

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

  return app;
}
