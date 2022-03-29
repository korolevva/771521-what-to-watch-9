import { fakeFilm } from '../../utils/mocks';
import { filmData, loadFilmByIdError } from './film-process';
import { loadFilmByIdRequest } from './film-process';
import { loadFilmByIdSuccess } from './film-process';

describe('Редьюсер: FilmData', () => {
  it('без дополнительных параметров должен возвращать начальное состояние', () => {
    expect(filmData.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      film: null,
      isFetching: false,
      error: null,
    });
  });

  it('должен перевести isFetching в true', () => {
    const state = {
      film: null,
      isFetching: false,
      error: null,
    };
    expect(filmData.reducer(state, loadFilmByIdRequest())).toEqual({
      film: null,
      isFetching: true,
      error: null,
    });
  });

  it('должен сохранить film в store', () => {
    const state = {
      film: null,
      isFetching: true,
      error: null,
    };
    expect(filmData.reducer(state, loadFilmByIdSuccess(fakeFilm))).toEqual({
      film: fakeFilm,
      isFetching: false,
      error: null,
    });
  });

  it('должен сохранить error в store', () => {
    const state = {
      film: fakeFilm,
      isFetching: false,
      error: null,
    };
    expect(
      filmData.reducer(
        state,
        loadFilmByIdError({ error: 'Sorry cant find that!' }),
      ),
    ).toEqual({
      film: fakeFilm,
      isFetching: false,
      error: { error: 'Sorry cant find that!' },
    });
  });
});

export {};
