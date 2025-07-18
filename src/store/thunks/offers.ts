import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../../types/offer';
import { APIRoute, PageStatus } from '../../components/const';
import { setPageStatus } from '../slices/data-slice/data-slice';
import { setOffersRent, setOfferPage, setNearOffers } from '../slices/offers-slice/offers-slice';
import { OfferPage } from '../../types/offer-page';

export const fetchOffersActions = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'fetchOffersRent',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersRent(data));
  },
);

export const fetchOfferPageActions = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'fetchOfferPage',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setPageStatus(PageStatus.Unknown));
    try {
      const { data } = await api.get<OfferPage>(`${APIRoute.Offers}/${offerId}`);
      dispatch(setOfferPage(data));
      dispatch(setPageStatus(PageStatus.Succes));
    } catch {
      dispatch(setPageStatus(PageStatus.NotFound));
    }
  },
);

export const fetchNearOffersActions = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'fetchNearOffers',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(setNearOffers(data));
  }
);
