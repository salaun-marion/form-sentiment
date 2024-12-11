import { Comment } from '../models/comment';
import '../styles/Comment.css';

function Emoji(sentiment: number) {
  if (sentiment < 0) {
    return (
      <span role="img" aria-label="angry">
        😡
      </span>
    );
  } else if (sentiment > 0) {
    return (
      <span role="img" aria-label="happy">
        😁
      </span>
    );
  } else {
    return (
      <span role="img" aria-label="neutral">
        🇨🇭
      </span>
    );
  }
}

export default function Comments({ comments }: { comments: Comment[] }) {
  return (
    <div className="card-container" style={{ paddingRight: '100px' }}>
      {comments.map((comment: Comment, index) => (
        <>
          <li key={index}>
            {Emoji(comment.sentiment)}
            <em>{comment.username} </em>({comment.sentiment.toFixed(2)})
            <br></br>
            {comment.text}
          </li>
          <br></br>
        </>
      ))}
    </div>
  );
}
