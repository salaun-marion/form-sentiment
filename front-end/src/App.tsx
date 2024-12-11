import { Routes, Route } from 'react-router';
import './styles/App.css';

import Comments from './components/Comment';
import OpinionForm from './components/Form';
import Authenticate from './components/Authenticate';

import { useFetch } from './actions/useFetch';

function App() {
  const { data } = useFetch({
    url: 'http://localhost:3500/admin/comments',
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Authenticate />} />
        <Route path="/user/comment" element={<OpinionForm />} />
        <Route path="/admin/comments" element={<Comments comments={data} />} />
      </Routes>
    </div>
  );
}

export default App;
