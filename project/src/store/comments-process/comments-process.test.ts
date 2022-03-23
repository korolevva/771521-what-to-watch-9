import { fakeComments } from '../../utils/mocks';
import {
  commentsData,
  loadCommentsError,
  loadCommentsRequest,
  // eslint-disable-next-line comma-dangle
  loadCommentsSuccess,
} from './comments-process';

describe('Редьюсер: CommentsData', () => {
  it('без дополнительных параметров должен возвращать начальное состояние', () => {
    expect(commentsData.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      comments: [],
      isFetching: false,
    });
  });

  it('должен перевести isFetching в true', () => {
    const state = {
      comments: [],
      isFetching: false,
    };
    expect(commentsData.reducer(state, loadCommentsRequest())).toEqual({
      comments: [],
      isFetching: true,
    });
  });

  it('должен сохранить comments в store', () => {
    const state = {
      comments: [],
      isFetching: true,
    };
    expect(
      commentsData.reducer(state, loadCommentsSuccess(fakeComments)),
    ).toEqual({
      comments: fakeComments,
      isFetching: false,
    });
  });

  it('при возникновении ошибки isFetching становится false', () => {
    const state = {
      comments: fakeComments,
      isFetching: true,
    };
    expect(commentsData.reducer(state, loadCommentsError())).toEqual({
      comments: fakeComments,
      isFetching: false,
    });
  });
});

export {};
