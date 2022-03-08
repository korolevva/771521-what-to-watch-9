import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const changeGenre = createAction<{ genre: string }>('genre/changeGenre');
export const getFilmsByGenre = createAction<{ genre: string }>(
  'genre/getFilmsByGenre',
);
export const loadFilmsRequest = createAction('data/loadFilmsRequest');
export const loadFilmsSucces = createAction<Film[]>('data/loadFilmsSucces');
