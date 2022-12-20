import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Main } from './components/Main/Main';
import { Order } from './components/Orders/Order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
      <Main />
      <Order />
    </BrowserRouter>
  // </React.StrictMode>
);

