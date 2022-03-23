import { createSlice } from '@reduxjs/toolkit';
import { AuthUserProcess } from '../../types/state';
import { NameSpace } from '../../types/const';

const initialState: AuthUserProcess = {
  user: null,
  error: null,
  isFetching: false,
};

export const authUserProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    checkAuthorizationRequest: (state) => {
      state.error = null;
      state.isFetching = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    checkAuthorizationError: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
  },
});

export const { checkAuthorizationRequest, checkAuthorizationError, setUser } =
  authUserProcess.actions;
