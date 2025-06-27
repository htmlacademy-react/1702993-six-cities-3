import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import City from '../types/city';

export const changeCity = createAction('changeCity', (value: City) => ({
  payload: value
}));
export const setOffersRent = createAction('setOffersRent');
export const changeActiveOffer = createAction('changeActiveOffer', (value: Offer | null) => ({
  payload: value
}));
export const changeSortByValue = createAction('changeSortByValue', (value: string) => ({
  payload: value
}));
