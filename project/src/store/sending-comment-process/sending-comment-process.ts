import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../types/const';
import { SendingCommentData } from '../../types/state';

const initialState: SendingCommentData = {
  isFetching: false,
};

export const sendingCommentData = createSlice({
  name: NameSpace.SendingComment,
  initialState,
  reducers: {
    sendCommentRequest: (state) => {
      state.isFetching = true;
    },
    sendCommentSuccess: (state) => {
      state.isFetching = false;
    },
    sendCommentError: (state) => {
      state.isFetching = false;
    },
  },
});

export const { sendCommentRequest, sendCommentSuccess, sendCommentError } =
  sendingCommentData.actions;
