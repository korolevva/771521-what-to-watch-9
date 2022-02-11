import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MainPageData = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmCardTitle={MainPageData.name}
      filmCardGenre={MainPageData.genre}
      filmCardYear={MainPageData.year}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
