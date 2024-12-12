import supertest from 'supertest';
import { makeApp } from '../src/server';
import { BSD } from '../src/database';
import Comment from '../src/models/comment';

const client = { analyzeSentiment: jest.fn() };
const database = {
  comments: { find: jest.fn(), insertOne: jest.fn() },
};

client.analyzeSentiment.mockImplementation(() =>
  Promise.resolve([{ documentSentiment: { score: 1 } }])
);

const app = makeApp(client, database as unknown as BSD);

describe('POST /user/comment', () => {
  describe('When you give username and text', () => {
    let response: supertest.Response;
    beforeAll(async () => {
      response = await supertest(app).post('/user/comment').send({
        username: 'username',
        text: 'text',
      });
    });
    it('should respond with status code 200', async () => {
      expect(response.status).toBe(200);
    });
    it('should insert the new comment', async () => {
      expect(database.comments.insertOne).toHaveBeenCalledTimes(1);
    });
    it('should have been called with right values', async () => {
      expect(database.comments.insertOne).toHaveBeenCalledWith(
        new Comment('username', 'text', 1)
      );
    });
  });

  describe('When you are lacking username or text', () => {
    it('[username missing] should respond with status code 400', async () => {
      const response = await supertest(app).post('/user/comment').send({
        username: '',
        text: 'text',
      });
      expect(response.status).toBe(400);
    });
    it('[text missing] should respond with status code 400', async () => {
      const response = await supertest(app).post('/user/comment').send({
        username: 'username',
        text: '',
      });
      expect(response.status).toBe(400);
    });
  });
});
