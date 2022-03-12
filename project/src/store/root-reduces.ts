import { sendingCommentData } from './sending-comment-process/sending-comment-process';
import { commentsData } from './comments-process/comments-process';
import { filmData } from './film-process/film-process';
import { NameSpace } from './../types/const';
import { combineReducers } from '@reduxjs/toolkit';
import { userProcess } from './user-process/user-process';
import { filmsData } from './films-process/films-process';

export const rootReducer = combineReducers({
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.films]: filmsData.reducer,
  [NameSpace.film]: filmData.reducer,
  [NameSpace.comments]: commentsData.reducer,
  [NameSpace.sendingComment]: sendingCommentData.reducer,
});
