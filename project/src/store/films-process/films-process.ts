import { createSlice } from '@reduxjs/toolkit';
import { Genres, NameSpace } from '../../types/const';
import { FilmsData } from '../../types/state';

const initialState: FilmsData = {
  genre: Genres.AllGenres.toString(),
  films: [],
  isDataLoaded: false,
  error: null,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    loadFilmsSuccess: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = false;
    },
    loadFilmsRequest: (state) => {
      state.isDataLoaded = true;
      state.error = null;
    },
    loadFilmsError: (state, action) => {
      state.isDataLoaded = false;
      state.error = action.payload;
    },
    changeGenre: (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    },
  },
});

export const {
  loadFilmsSuccess,
  loadFilmsRequest,
  changeGenre,
  loadFilmsError,
} = filmsData.actions;
