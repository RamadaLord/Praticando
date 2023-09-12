import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Flip, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
    autoClose={2000}
    theme='dark'
    transition={Flip}
    />
  </React.StrictMode>
);


