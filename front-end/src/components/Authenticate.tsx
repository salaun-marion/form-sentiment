import { Link } from 'react-router';

export default function Authenticate() {
  return (
    <div className="card-container">
      <button>
        <Link to="/admin/comments">I am an admin</Link>
      </button>
      <br></br>
      <button>
        <Link to="/user/comment">I am an user</Link>
      </button>
    </div>
  );
}
