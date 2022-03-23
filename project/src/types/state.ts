import { store } from '../store/index.js';
import { Comment } from './comment.js';
import { AuthorizationStatus } from './const.js';
import { Film } from './film.js';
import { User } from './user.js';

export type AuthUserProcess = {
  user: User | null;
  error: Error | null;
  isFetching: boolean;
};

export type ChangeAuthStatusProcess = {
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
  error: Error | null;
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

export type PromoFilmData = {
  film: Film | null;
  isFetching: boolean;
  error: Error | null;
};

export type MyFavoriteFilmsData = {
  films: Film[];
  isFetching: boolean;
  error: Error | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
