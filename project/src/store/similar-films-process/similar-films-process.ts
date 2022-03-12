import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../types/const';
import { SimilarFilmsData } from '../../types/state';

const initialState: SimilarFilmsData = {
  similarFilms: [],
  isFetching: false,
};

export const filmsData = createSlice({
  name: NameSpace.films,
  initialState,
  reducers: {
    loadSimilarFilmsSuccess: (state, action) => {
      state.similarFilms = action.payload;
      state.isFetching = false;
    },
    loadSimilarFilmsRequest: (state) => {
      state.isFetching = true;
    },
  },
});

export const { loadSimilarFilmsSuccess, loadSimilarFilmsRequest } =
  filmsData.actions;
