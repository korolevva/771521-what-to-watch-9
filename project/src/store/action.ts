import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../types/const';
import { Film } from '../types/film';

export const changeGenre = createAction<{ genre: string }>('genre/changeGenre');
export const getFilmsByGenre = createAction<{ genre: string }>(
  'genre/getFilmsByGenre',
);
export const loadFilmsRequest = createAction('data/loadFilmsRequest');
export const loadFilmsSucces = createAction<Film[]>('data/loadFilmsSucces');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization',
);
export const setError = createAction<string>('data/setError');
