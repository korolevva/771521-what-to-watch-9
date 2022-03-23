import { createSlice } from '@reduxjs/toolkit';
import { ChangeAuthStatusProcess } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../types/const';

const initialState: ChangeAuthStatusProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const changeAuthStatusProcess = createSlice({
  name: NameSpace.auth,
  initialState,
  reducers: {
    changeAuthStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { changeAuthStatus } = changeAuthStatusProcess.actions;
