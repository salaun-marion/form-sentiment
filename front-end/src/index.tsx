import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
