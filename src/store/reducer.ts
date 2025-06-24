import { createReducer } from '@reduxjs/toolkit';
import { changeActiveOffer, changeCity } from './action';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';
import { cities } from '../mocks/cities';
import City from '../types/city';

type itemsState = {
  city: City;
  offers: Offer[];
  activeOffer: Offer | null;
}

const initialState: itemsState = {
  city: cities[0],
  offers,
  activeOffer: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    });
});

export { reducer };
