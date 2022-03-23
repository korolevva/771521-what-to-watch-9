import { fakeFilm } from '../../utils/mocks';
import {
  loadSimilarFilmsRequest,
  loadSimilarFilmsSuccess,
  // eslint-disable-next-line comma-dangle
  similarFilmsData,
} from './similar-films-process';

describe('Редьюсер: SimilarFilmsData', () => {
  it('без дополнительных параметров должен возвращать начальное состояние', () => {
    expect(
      similarFilmsData.reducer(void 0, { type: 'UNKNOWN_ACTION' }),
    ).toEqual({
      similarFilms: [],
      isFetching: false,
    });
  });

  it('должен перевести isFetching в true', () => {
    const state = {
      similarFilms: [],
      isFetching: false,
    };
    expect(similarFilmsData.reducer(state, loadSimilarFilmsRequest())).toEqual({
      similarFilms: [],
      isFetching: true,
    });
  });

  it('должен сохранить similarFilms в store', () => {
    const state = {
      similarFilms: [],
      isFetching: true,
    };
    expect(
      similarFilmsData.reducer(state, loadSimilarFilmsSuccess(fakeFilm)),
    ).toEqual({
      similarFilms: fakeFilm,
      isFetching: false,
    });
  });
});

export {};
