import { Comment } from '../models/comment';

export default function Comments({ comments }: { comments: Comment[] }) {
  return (
    <div>
      {comments.map((comment: Comment) => (
        <li key={comment.username}>
          <em>
            {comment.username} ({comment.sentiment.toFixed(2)}):
          </em>
          {comment.text}
        </li>
      ))}
    </div>
  );
}
