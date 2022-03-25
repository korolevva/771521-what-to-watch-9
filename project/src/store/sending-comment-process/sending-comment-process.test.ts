import {
  sendCommentError,
  sendCommentRequest,
  sendCommentSuccess,
  // eslint-disable-next-line comma-dangle
  sendingCommentData,
} from './sending-comment-process';

describe('Редьюсер: SendingCommentData', () => {
  it('без дополнительных параметров должен возвращать начальное состояние', () => {
    expect(
      sendingCommentData.reducer(void 0, { type: 'UNKNOWN_ACTION' }),
    ).toEqual({
      isFetching: false,
    });
  });

  it('должен перевести isFetching в true', () => {
    const state = {
      isFetching: false,
    };
    expect(sendingCommentData.reducer(state, sendCommentRequest())).toEqual({
      isFetching: true,
    });
  });

  it('должен перевести isFetching в false', () => {
    const state = {
      isFetching: true,
    };
    expect(sendingCommentData.reducer(state, sendCommentSuccess())).toEqual({
      isFetching: false,
    });
  });

  it('должен при ошибке перевести isFetching в false', () => {
    const state = {
      isFetching: true,
    };
    expect(sendingCommentData.reducer(state, sendCommentError())).toEqual({
      isFetching: false,
    });
  });
});

export {};
