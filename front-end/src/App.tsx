import './styles/App.css';

import Comments from './components/Comment';
import OpinionForm from './components/Form';

import { useFetch } from './actions/useFetch';
import { useRef } from 'react';

function App() {
  const { data } = useFetch({
    url: 'http://localhost:3500/admin/comments',
  });
  const ref = useRef(null);

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
