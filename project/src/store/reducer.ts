import { createReducer } from '@reduxjs/toolkit';
import { films } from '../components/mocks/films';
import { Genres } from '../types/const';
import { changeGenre, getFilmsByGenre } from './action';

const initialState = {
  genre: Genres.AllGenres.toString(),
  films: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      const { genre } = action.payload;
      state.films = films.filter((film) => film.genre === genre);
    });
});

export { reducer };
