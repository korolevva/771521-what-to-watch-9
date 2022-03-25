import { fakePromoFilm } from '../../utils/mocks';
import {
  loadPromoFilmError,
  loadPromoFilmRequest,
  loadPromoFilmSuccess,
  // eslint-disable-next-line comma-dangle
  promoFilmData,
} from './promo-film-process';

describe('Редьюсер: PromoFilmData', () => {
  it('без дополнительных параметров должен возвращать начальное состояние', () => {
    expect(promoFilmData.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
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
    expect(promoFilmData.reducer(state, loadPromoFilmRequest())).toEqual({
      film: null,
      isFetching: true,
      error: null,
    });
  });

  it('должен сохранить promoFilm в store', () => {
    const state = {
      film: null,
      isFetching: true,
      error: null,
    };
    expect(
      promoFilmData.reducer(state, loadPromoFilmSuccess(fakePromoFilm)),
    ).toEqual({
      film: fakePromoFilm,
      isFetching: false,
      error: null,
    });
  });

  it('должен сохранить error в store', () => {
    const state = {
      film: fakePromoFilm,
      isFetching: false,
      error: null,
    };
    expect(
      promoFilmData.reducer(
        state,
        loadPromoFilmError({ error: 'Sorry cant find that!' }),
      ),
    ).toEqual({
      film: fakePromoFilm,
      isFetching: false,
      error: { error: 'Sorry cant find that!' },
    });
  });
});

export {};
