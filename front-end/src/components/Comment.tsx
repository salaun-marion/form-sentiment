import { Comment } from '../models/comment';
import '../styles/Comment.css';

function Emoji(sentiment: number) {
  if (sentiment < 0) {
    return (
      <span role="img" aria-label="angry">
        😡 Bad
      </span>
    );
  } else if (sentiment > 0) {
    return (
      <span role="img" aria-label="happy">
        😁 Good
      </span>
    );
  } else {
    return (
      <span role="img" aria-label="neutral">
        🇨🇭 Neutral
      </span>
    );
  }
}

export default function Comments({ comments }: { comments: Comment[] }) {
  //TODO: fix key
  return (
    <div className="card-container" style={{ width: '500px' }}>
      <h3>List of comments</h3>

      {comments.map((comment: Comment, index) => (
        <>
          <li key={index}>
            {Emoji(comment.sentiment)}
            <em> {comment.username} </em>({comment.sentiment.toFixed(2)})
            <br></br>
            {comment.text}
          </li>
          <br></br>
        </>
      ))}
    </div>
  );
}
