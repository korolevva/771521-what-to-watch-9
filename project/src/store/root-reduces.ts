import { promoFilmData } from './promo-film-process/promo-film-process';
import { sendingCommentData } from './sending-comment-process/sending-comment-process';
import { commentsData } from './comments-process/comments-process';
import { filmData } from './film-process/film-process';
import { NameSpace } from './../types/const';
import { combineReducers } from '@reduxjs/toolkit';
import { authUserProcess } from './auth-user-process/auth-user-process';
import { filmsData } from './films-process/films-process';
import { changeAuthStatusProcess } from './change-auth-status-process/change-auth-status-process';
import { similarFilmsData } from './similar-films-process/similar-films-process';
import { myFavoriteFilmsData } from './my-favorite-film-process.test.ts/my-favorite-film-process';

export const rootReducer = combineReducers({
  [NameSpace.user]: authUserProcess.reducer,
  [NameSpace.films]: filmsData.reducer,
  [NameSpace.film]: filmData.reducer,
  [NameSpace.comments]: commentsData.reducer,
  [NameSpace.sendingComment]: sendingCommentData.reducer,
  [NameSpace.promoFilm]: promoFilmData.reducer,
  [NameSpace.favorite]: myFavoriteFilmsData.reducer,
  [NameSpace.auth]: changeAuthStatusProcess.reducer,
  [NameSpace.similar]: similarFilmsData.reducer,
});
