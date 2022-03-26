import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../types/const';
import { SimilarFilmsData } from '../../types/state';

const initialState: SimilarFilmsData = {
  similarFilms: [],
  isFetching: false,
};

export const similarFilmsData = createSlice({
  name: NameSpace.Similar,
  initialState,
  reducers: {
    loadSimilarFilmsRequest: (state) => {
      state.isFetching = true;
    },
    loadSimilarFilmsSuccess: (state, action) => {
      state.similarFilms = action.payload;
      state.isFetching = false;
    },
  },
});

export const { loadSimilarFilmsSuccess, loadSimilarFilmsRequest } =
  similarFilmsData.actions;
