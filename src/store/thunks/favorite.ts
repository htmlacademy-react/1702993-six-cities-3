import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../../types/offer';
import { changeProps } from '../../types/change-comment';
import { APIRoute } from '../../components/const';
import { setFavorites } from '../slices/offers-slice/offers-slice';

export const fetchFavoritesActions = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    dispatch(setFavorites(data));
  },
);

export const changeFavoritesActions = createAsyncThunk<void, changeProps, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'changeFavorites',
  async ({ offerId, status }, { extra: api }) => {
    await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${status}`);
  },
);
