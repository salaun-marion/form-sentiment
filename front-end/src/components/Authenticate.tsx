import { Link } from 'react-router';

import '../styles/Authenticate.css';

export default function Authenticate() {
  return (
    <div className="card-container authenticate-container">
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
