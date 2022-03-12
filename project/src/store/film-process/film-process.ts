import { FilmData } from './../../types/state';
import { NameSpace } from '../../types/const';
import { createSlice } from '@reduxjs/toolkit';

const initialState: FilmData = {
  film: null,
  isFetching: false,
};

export const filmData = createSlice({
  name: NameSpace.film,
  initialState,
  reducers: {
    loadFilmByIdRequest: (state) => {
      state.isFetching = true;
    },
    loadFilmByIdSuccess: (state, action) => {
      state.film = action.payload;
      state.isFetching = false;
    },
    loadFilmByIdError: (state) => {
      state.isFetching = false;
    },
  },
});

export const { loadFilmByIdRequest, loadFilmByIdSuccess, loadFilmByIdError } =
  filmData.actions;
