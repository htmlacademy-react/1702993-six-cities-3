import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import City from '../types/city';
import { AppRoute, AuthorizationStatus } from '../components/const';

export const changeCity = createAction('changeCity', (value: City) => ({
  payload: value
}));
export const setOffersRent = createAction('setOffersRent', (value: Offer[]) => ({
  payload: value
}));
export const changeActiveOffer = createAction('changeActiveOffer', (value: Offer | null) => ({
  payload: value
}));
export const changeSortByValue = createAction('changeSortByValue', (value: string) => ({
  payload: value
}));
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setLoadingStatus = createAction<boolean>('setLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
