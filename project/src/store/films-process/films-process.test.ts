import { Genres } from '../../types/const';
import { fakeFilms } from '../../utils/mocks';
import {
  changeGenre,
  filmsData,
  loadFilmsRequest,
  // eslint-disable-next-line comma-dangle
  loadFilmsSuccess,
} from './films-process';

describe('Редьюсер: filmsData', () => {
  it('без дополнительных параметров должен возвращать начальное состояние', () => {
    expect(filmsData.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      genre: Genres.AllGenres.toString(),
      films: [],
      isDataLoaded: false,
    });
  });

  it('должен перевести isDataLoaded в true', () => {
    const state = {
      genre: Genres.AllGenres.toString(),
      films: [],
      isDataLoaded: false,
    };
    expect(filmsData.reducer(state, loadFilmsRequest())).toEqual({
      genre: Genres.AllGenres.toString(),
      films: [],
      isDataLoaded: true,
    });
  });

  it('должен сохранить films в store', () => {
    const state = {
      genre: Genres.AllGenres.toString(),
      films: [],
      isDataLoaded: false,
    };
    expect(filmsData.reducer(state, loadFilmsSuccess(fakeFilms))).toEqual({
      genre: Genres.AllGenres.toString(),
      films: fakeFilms,
      isDataLoaded: false,
    });
  });

  it('должен изменить genre', () => {
    const state = {
      genre: Genres.AllGenres.toString(),
      films: fakeFilms,
      isDataLoaded: false,
    };
    expect(filmsData.reducer(state, changeGenre({ genre: 'Crime' }))).toEqual({
      genre: 'Crime',
      films: fakeFilms,
      isDataLoaded: false,
    });
  });
});

export {};
