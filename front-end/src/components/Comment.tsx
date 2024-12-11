import { Comment } from '../models/comment';

export default function Comments({ comments }: { comments: Comment[] }) {
  return (
    <div>
      {comments.map((comment: Comment, index) => (
        <li key={index}>
          <em>
            {comment.username} ({comment.sentiment.toFixed(2)}):
          </em>
          {comment.text}
        </li>
      ))}
    </div>
  );
}
