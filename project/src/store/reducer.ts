import { AuthorizationStatus } from './../types/const';
import { createReducer } from '@reduxjs/toolkit';
import { Genres } from '../types/const';
import { Film } from '../types/film';
import {
  changeGenre,
  getFilmsByGenre,
  loadFilmsSucces,
  loadFilmsRequest,
  // eslint-disable-next-line comma-dangle
  requireAuthorization,
} from './action';

type InitalState = {
  genre: string;
  films: Film[];
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitalState = {
  genre: Genres.AllGenres.toString(),
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      const { genre } = action.payload;
      state.films = state.films.filter((film) => film.genre === genre);
    })
    .addCase(loadFilmsSucces, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = false;
    })
    .addCase(loadFilmsRequest, (state, action) => {
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
