import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../types/const';
import { CommentsData } from '../../types/state';

const initialState: CommentsData = {
  comments: [],
  isFetching: false,
};

export const commentsData = createSlice({
  name: NameSpace.comments,
  initialState,
  reducers: {
    loadCommentsSuccess: (state, action) => {
      state.comments = action.payload;
      state.isFetching = false;
    },
    loadCommentsRequest: (state) => {
      state.isFetching = true;
    },
    loadCommentsError: (state) => {
      state.isFetching = false;
    },
  },
});

export const { loadCommentsSuccess, loadCommentsRequest, loadCommentsError } =
  commentsData.actions;
