import { loadFilmsSucces, loadFilmsRequest } from './action';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute } from '../types/const';
import { Film } from '../types/film';

export const loadFilmsAction = createAsyncThunk('data/loadFilms', async () => {
  store.dispatch(loadFilmsRequest());
  const { data } = await api.get<Film[]>(APIRoute.Films);
  store.dispatch(loadFilmsSucces(data));
});
