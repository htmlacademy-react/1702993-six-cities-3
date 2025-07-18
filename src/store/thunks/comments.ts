import { postComment } from '../../types/post-comment';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../components/const';
import { Comment } from '../../types/comment';
import { setComments } from '../slices/comments-slice/comments-slice';
import { AppDispatch } from '../../types/state';

export const fetchCommentsActions = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (offerId, { dispatch, extra: api }) => {
    const response = await api.get<Comment[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(setComments(response.data));
  }
);

const postCommentAction = createAsyncThunk<Comment, postComment, {
  extra: AxiosInstance;
}>(
  'postComment',
  async ({
    offerId, review }, {extra: api }) => {
    const comment = review.comment;
    const rating = Number(review.rating);
    const {data} = await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, { comment, rating });
    return data;
  }
);

export const commentsThunks = {postCommentAction};
