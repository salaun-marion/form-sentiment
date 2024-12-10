import './styles/App.css';

import Comments from './components/Comment';
import OpinionForm from './components/Form';

import { useFetch } from './function/useFetch';
import { Comment } from './models/comment';

function App() {
  const { data } = useFetch({
    url: 'http://localhost:3500/admin/comments',
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <OpinionForm />
      <Comments comments={data} />
    </div>
  );
}

export default App;
