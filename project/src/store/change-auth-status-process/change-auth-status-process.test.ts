import { AuthorizationStatus } from '../../types/const';
import {
  changeAuthStatus,
  // eslint-disable-next-line comma-dangle
  changeAuthStatusProcess,
} from './change-auth-status-process';

describe('Редьюсер: changeAuthStatusProcess', () => {
  it('без дополнительных параметров должен возвращать начальное состояние', () => {
    expect(
      changeAuthStatusProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' }),
    ).toEqual({
      authorizationStatus: 'UNKNOWN',
    });
  });

  it('должен изменить authorizationStatus на AUTH', () => {
    const state = { authorizationStatus: AuthorizationStatus.Unknown };
    expect(
      changeAuthStatusProcess.reducer(
        state,
        changeAuthStatus(AuthorizationStatus.Auth),
      ),
    ).toEqual({
      authorizationStatus: 'AUTH',
    });
  });

  it('должен  изменить authorizationStatus on NOAUTH', () => {
    const state = { authorizationStatus: AuthorizationStatus.Auth };
    expect(
      changeAuthStatusProcess.reducer(
        state,
        changeAuthStatus(AuthorizationStatus.NoAuth),
      ),
    ).toEqual({
      authorizationStatus: 'NOAUTH',
    });
  });
});

export {};
