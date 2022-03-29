import { fakeFilms } from '../../utils/mocks';
import { changeFavoriteFilmRequest } from './my-favorite-film-process';
import { loadFavoriteFilmsRequest } from './my-favorite-film-process';
import { changeFavoriteFilmError } from './my-favorite-film-process';
import { changeFavoriteFilmSuccess } from './my-favorite-film-process';
import { loadFavoriteFilmsError } from './my-favorite-film-process';
import { loadFavoriteFilmsSuccess } from './my-favorite-film-process';
import { myFavoriteFilmsData } from './my-favorite-film-process';

describe('Редьюсер: MyFavoriteFilmsData', () => {
  it('без дополнительных параметров должен возвращать начальное состояние', () => {
    expect(
      myFavoriteFilmsData.reducer(void 0, { type: 'UNKNOWN_ACTION' }),
    ).toEqual({
      films: [],
      isFetching: false,
      error: null,
    });
  });

  it('должен перевести isFetching в true', () => {
    const state = {
      films: [],
      isFetching: false,
      error: null,
    };
    expect(
      myFavoriteFilmsData.reducer(state, loadFavoriteFilmsRequest()),
    ).toEqual({
      films: [],
      isFetching: true,
      error: null,
    });
  });

  it('должен сохранить film в store', () => {
    const state = {
      films: [],
      isFetching: true,
      error: null,
    };
    expect(
      myFavoriteFilmsData.reducer(state, loadFavoriteFilmsSuccess(fakeFilms)),
    ).toEqual({
      films: fakeFilms,
      isFetching: false,
      error: null,
    });
  });

  it('должен перевести isFetching в false', () => {
    const state = {
      films: fakeFilms,
      isFetching: true,
      error: null,
    };
    expect(
      myFavoriteFilmsData.reducer(state, loadFavoriteFilmsError()),
    ).toEqual({
      films: fakeFilms,
      isFetching: false,
      error: null,
    });
  });

  it('должен перевести isFetching в true при изменении жанра', () => {
    const state = {
      films: fakeFilms,
      isFetching: false,
      error: null,
    };
    expect(
      myFavoriteFilmsData.reducer(state, changeFavoriteFilmRequest()),
    ).toEqual({
      films: fakeFilms,
      isFetching: true,
      error: null,
    });
  });

  it('должен перевести isFetching в false при успешном изменении жанра', () => {
    const state = {
      films: fakeFilms,
      isFetching: true,
      error: null,
    };
    expect(
      myFavoriteFilmsData.reducer(state, changeFavoriteFilmSuccess()),
    ).toEqual({
      films: fakeFilms,
      isFetching: false,
      error: null,
    });
  });

  it('должен перевести isFetching в false при ошибке', () => {
    const state = {
      films: fakeFilms,
      isFetching: true,
      error: null,
    };
    expect(
      myFavoriteFilmsData.reducer(state, changeFavoriteFilmError()),
    ).toEqual({
      films: fakeFilms,
      isFetching: false,
      error: null,
    });
  });
});
