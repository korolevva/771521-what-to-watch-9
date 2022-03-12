import { createSlice } from '@reduxjs/toolkit';
import { Genres, NameSpace } from '../../types/const';
import { FilmsData } from '../../types/state';

const initialState: FilmsData = {
  genre: Genres.AllGenres.toString(),
  films: [],
  isDataLoaded: false,
};

export const filmsData = createSlice({
  name: NameSpace.films,
  initialState,
  reducers: {
    loadFilmsSuccess: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = false;
    },
    loadFilmsRequest: (state) => {
      state.isDataLoaded = true;
    },
    changeGenre: (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    },
    getFilmsByGenre: (state, action) => {
      const { genre } = action.payload;
      state.films = state.films.filter((film) => film.genre === genre);
    },
  },
});

export const {
  loadFilmsSuccess,
  loadFilmsRequest,
  changeGenre,
  getFilmsByGenre,
} = filmsData.actions;
