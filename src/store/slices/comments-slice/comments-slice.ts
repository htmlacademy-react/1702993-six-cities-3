import { createSlice } from '@reduxjs/toolkit';
import { CommentsStatus, NameSpace } from '../../../components/const';
import { Comment } from '../../../types/comment';
import { commentsThunks } from '../../thunks/comments';
import { PayloadAction } from '@reduxjs/toolkit';

type ReviewSlice = {
  comments: Comment[];
  status: CommentsStatus;
}

const initialState: ReviewSlice = {
  comments: [],
  status: CommentsStatus.Unkwnown
};

export const reviewSlice = createSlice({
  extraReducers(builder) {
    builder
      .addCase(commentsThunks.postCommentAction.pending, (state) => {
        state.status = CommentsStatus.Pending;
      })
      .addCase(commentsThunks.postCommentAction.fulfilled, (state, action) => {
        state.status = CommentsStatus.Succes;
        state.comments.push(action.payload);
      })
      .addCase(commentsThunks.postCommentAction.rejected, (state) => {
        state.status = CommentsStatus.Failed;
      });
  },
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    setStatusIdle: (staet) => {
      staet.status = CommentsStatus.Unkwnown;
    }
  },
});

export const {setStatusIdle} = reviewSlice.actions;
export const {setComments} = reviewSlice.actions;
export const reviewActions = {
  ...commentsThunks
};
