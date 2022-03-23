/* eslint-disable no-debugger */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, AuthorizationStatus } from '../types/const';
import { Film } from '../types/film';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import errorHandle from '../services/error-handle';
import {
  loadFilmsRequest,
  // eslint-disable-next-line comma-dangle
  loadFilmsSuccess,
} from './films-process/films-process';
import {
  checkAuthorizationError,
  checkAuthorizationRequest,
  // eslint-disable-next-line comma-dangle
  setUser,
} from './auth-user-process/auth-user-process';
import {
  loadFilmByIdError,
  loadFilmByIdRequest,
  // eslint-disable-next-line comma-dangle
  loadFilmByIdSuccess,
} from './film-process/film-process';
import {
  loadSimilarFilmsRequest,
  // eslint-disable-next-line comma-dangle
  loadSimilarFilmsSuccess,
} from './similar-films-process/similar-films-process';
import {
  loadCommentsError,
  loadCommentsRequest,
  // eslint-disable-next-line comma-dangle
  loadCommentsSuccess,
} from './comments-process/comments-process';
import { SendingCommentData } from '../types/sending-comment-data';
import {
  sendCommentError,
  sendCommentRequest,
  // eslint-disable-next-line comma-dangle
  sendCommentSuccess,
} from './sending-comment-process/sending-comment-process';
import { toast } from 'react-toastify';
import {
  loadPromoFilmError,
  loadPromoFilmRequest,
  // eslint-disable-next-line comma-dangle
  loadPromoFilmSuccess,
} from './promo-film-process/promo-film-process';
import { User } from '../types/user';
import { changeAuthStatus } from './change-auth-status-process/change-auth-status-process';
import {
  changeFavoriteFilmError,
  changeFavoriteFilmRequest,
  changeFavoriteFilmSuccess,
  loadFavoriteFilmsError,
  loadFavoriteFilmsRequest,
  // eslint-disable-next-line comma-dangle
  loadFavoriteFilmsSuccess,
} from './my-favorite-film-process.test.ts/my-favorite-film-process';

export const loadFilmsAction = createAsyncThunk('data/loadFilms', async () => {
  try {
    store.dispatch(loadFilmsRequest());
    const { data } = await api.get<Film[]>(APIRoute.Films);
    store.dispatch(loadFilmsSuccess(data));
  } catch (error) {
    errorHandle(error);
  }
});

export const checkAuthAction = createAsyncThunk(
  'user/checkAuthorization',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ email, password }: AuthData) => {
    try {
      store.dispatch(checkAuthorizationRequest());
      const { data } = await api.post<User>(APIRoute.Login, {
        email,
        password,
      });
      saveToken(data.token);
      store.dispatch(changeAuthStatus(AuthorizationStatus.Auth));
      store.dispatch(setUser(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(checkAuthorizationError(error));
      store.dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk('user/logout', async () => {
  try {
    store.dispatch(checkAuthorizationRequest());
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    store.dispatch(setUser(null));
  } catch (error) {
    errorHandle(error);
    store.dispatch(checkAuthorizationError(error));
  }
});

export const loadFilmByIdAction = createAsyncThunk(
  'data/loadFilmById',
  async (id: string) => {
    try {
      store.dispatch(loadFilmByIdRequest());
      const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
      store.dispatch(loadFilmByIdSuccess(data));
    } catch (error) {
      store.dispatch(loadFilmByIdError(error));

      errorHandle(error);
    }
  },
);

export const loadSimilarFilmsAction = createAsyncThunk(
  'data/loadSimilarFilms',
  async (id: string) => {
    try {
      store.dispatch(loadSimilarFilmsRequest());
      const { data } = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
      store.dispatch(loadSimilarFilmsSuccess(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const loadCommentsAction = createAsyncThunk(
  'data/loadCommentsFilms',
  async (id: string) => {
    try {
      store.dispatch(loadCommentsRequest());
      const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);

      store.dispatch(loadCommentsSuccess(data));
    } catch (error) {
      store.dispatch(loadCommentsError());
      errorHandle(error);
    }
  },
);

export const sendCommentAction = createAsyncThunk(
  'data/sendComment',
  async ({
    reviewMessage,
    rating,
    id,
  }: {
    reviewMessage: string;
    rating: string;
    id: string;
  }) => {
    try {
      store.dispatch(sendCommentRequest());
      await toast.promise(
        api.post<SendingCommentData>(`${APIRoute.Comments}/${id}`, {
          comment: reviewMessage,
          rating,
        }),
        {
          pending: 'Review is sending',
          success: 'Review sent 👌',
          error: 'Send error 🤯',
        },
      );
      store.dispatch(sendCommentSuccess());
    } catch (error) {
      store.dispatch(sendCommentError());
      errorHandle(error);
    }
  },
);

export const loadPromoFilmAction = createAsyncThunk(
  'data/loadPromoFilm',
  async () => {
    try {
      store.dispatch(loadPromoFilmRequest());
      const { data } = await api.get<Film>(APIRoute.PromoFilm);
      store.dispatch(loadPromoFilmSuccess(data));
    } catch (error) {
      store.dispatch(loadPromoFilmError(error));

      errorHandle(error);
    }
  },
);

export const loadFavoriteFilmsAction = createAsyncThunk(
  'data/loadFavoriteFilms',
  async () => {
    try {
      store.dispatch(loadFavoriteFilmsRequest());
      const { data } = await api.get<Film[]>(APIRoute.Favorite);

      store.dispatch(loadFavoriteFilmsSuccess(data));
    } catch (error) {
      store.dispatch(loadFavoriteFilmsError());
      errorHandle(error);
    }
  },
);

export const changeFavoriteFilmStatusAction = createAsyncThunk(
  'data/changeFavoriteFilmStatus',
  async ({ status, id }: { status: string; id: string }) => {
    try {
      store.dispatch(changeFavoriteFilmRequest());
      await api.post<Film>(`${APIRoute.Favorite}/${id}/${status}`);
      store.dispatch(loadFilmByIdAction(id));
      store.dispatch(loadPromoFilmAction());
      store.dispatch(changeFavoriteFilmSuccess());
    } catch (error) {
      store.dispatch(changeFavoriteFilmError());
      errorHandle(error);
    }
  },
);
