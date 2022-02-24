import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { films } from './components/mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App films={films} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
