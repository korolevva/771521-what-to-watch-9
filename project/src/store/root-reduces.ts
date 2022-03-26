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
  [NameSpace.User]: authUserProcess.reducer,
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.Comments]: commentsData.reducer,
  [NameSpace.SendingComment]: sendingCommentData.reducer,
  [NameSpace.PromoFilm]: promoFilmData.reducer,
  [NameSpace.Favorite]: myFavoriteFilmsData.reducer,
  [NameSpace.Auth]: changeAuthStatusProcess.reducer,
  [NameSpace.Similar]: similarFilmsData.reducer,
});
