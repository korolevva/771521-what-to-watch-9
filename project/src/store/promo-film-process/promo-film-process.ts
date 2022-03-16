import { PromoFilmData } from './../../types/state';
import { NameSpace } from '../../types/const';
import { createSlice } from '@reduxjs/toolkit';

const initialState: PromoFilmData = {
  film: null,
  isFetching: false,
  error: null,
};

export const promoFilmData = createSlice({
  name: NameSpace.promoFilm,
  initialState,
  reducers: {
    loadPromoFilmRequest: (state) => {
      state.isFetching = true;
    },
    loadPromoFilmSuccess: (state, action) => {
      state.film = action.payload;
      state.isFetching = false;
    },
    loadPromoFilmError: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadPromoFilmRequest,
  loadPromoFilmSuccess,
  loadPromoFilmError,
} = promoFilmData.actions;
