import { createSlice } from '@reduxjs/toolkit';
import { CommentSendingStatus, NameSpace } from '../../types/const';
import { SendingCommentData } from '../../types/state';

const initialState: SendingCommentData = {
  isFetching: false,
  error: null,
  commentSendingStatus: CommentSendingStatus.Unknown,
};

export const sendingCommentData = createSlice({
  name: NameSpace.SendingComment,
  initialState,
  reducers: {
    sendCommentRequest: (state) => {
      state.isFetching = true;
      state.commentSendingStatus = CommentSendingStatus.Unknown;
    },
    sendCommentSuccess: (state) => {
      state.isFetching = false;
      state.error = null;
      state.commentSendingStatus = CommentSendingStatus.Success;
    },
    sendCommentError: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
      state.commentSendingStatus = CommentSendingStatus.Error;
    },
  },
});

export const { sendCommentRequest, sendCommentSuccess, sendCommentError } =
  sendingCommentData.actions;
