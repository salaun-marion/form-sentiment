import { MongoClient } from 'mongodb';
import Comment from './models/comment';

export class BSD {
  static readonly COMMENTS = 'comments';

  //TODO : move username and password
  static readonly client = new MongoClient(
    'mongodb+srv://marionsl:1zASYZAgg2C8VSrl@cluster0.x1fo0.mongodb.net/'
  );

  //TODO: change the name of the database
  static readonly database = this.client.db('bsd');
  static readonly comments = this.database.collection<Comment>(this.COMMENTS);
}
