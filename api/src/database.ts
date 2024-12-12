import { MongoClient } from 'mongodb';
import Comment from './models/comment';

export class BSD {
  static readonly COMMENTS = 'comments';

  readonly client = new MongoClient(process.env.MONGO_DB_STRING_CONNECTION);

  readonly database = this.client.db('bsd');
  readonly comments = this.database.collection<Comment>(BSD.COMMENTS);
}
