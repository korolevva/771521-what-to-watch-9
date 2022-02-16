import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';

const MainPageData = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        filmCardTitle={MainPageData.name}
        filmCardGenre={MainPageData.genre}
        filmCardYear={MainPageData.year}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
