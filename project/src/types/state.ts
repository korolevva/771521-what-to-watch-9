import { store } from '../store/index.js';
import { Comment } from './comment.js';
import { AuthorizationStatus } from './const.js';
import { Film } from './film.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type FilmsData = {
  genre: string;
  films: Film[];
  isDataLoaded: boolean;
};

export type FilmData = {
  film: Film | null;
  isFetching: boolean;
};

export type SimilarFilmsData = {
  similarFilms: Film[];
  isFetching: boolean;
};

export type CommentsData = {
  comments: Comment[];
  isFetching: boolean;
};

export type SendingCommentData = {
  isFetching: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
