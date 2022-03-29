import { fakeUser } from '../../utils/mocks';
import { authUserProcess } from './auth-user-process';
import { checkAuthorizationError } from './auth-user-process';
import { checkAuthorizationRequest } from './auth-user-process';
import { setUser } from './auth-user-process';

describe('Редьюсер: authUserProcess', () => {
  it('без дополнительных параметров должен возвращать начальное состояние', () => {
    expect(authUserProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      {
        user: null,
        error: null,
        isFetching: false,
      },
    );
  });

  it('начинается загрузка данных, isFetching становится true', () => {
    const state = { user: null, error: null, isFetching: false };
    expect(authUserProcess.reducer(state, checkAuthorizationRequest())).toEqual(
      {
        user: null,
        error: null,
        isFetching: true,
      },
    );
  });

  it('должен сохранить user в store', () => {
    const state = { user: null, error: null, isFetching: true };
    expect(authUserProcess.reducer(state, setUser(fakeUser))).toEqual({
      user: fakeUser,
      error: null,
      isFetching: true,
    });
  });

  it('должен сохранить error в store', () => {
    const state = { user: fakeUser, error: null, isFetching: true };
    expect(
      authUserProcess.reducer(
        state,
        checkAuthorizationError({ error: 'Sorry cant find that!' }),
      ),
    ).toEqual({
      user: fakeUser,
      error: { error: 'Sorry cant find that!' },
      isFetching: false,
    });
  });
});

export {};
