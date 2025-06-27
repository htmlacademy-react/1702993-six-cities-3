import { createReducer } from '@reduxjs/toolkit';
import { changeActiveOffer, changeCity, changeSortByValue } from './action';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';
import { cities } from '../mocks/cities';
import City from '../types/city';
import { SORT_OPTIONS } from '../components/const';

type itemsState = {
  city: City;
  offers: Offer[];
  activeOffer: Offer | null;
  sortBy: string;
}

const initialState: itemsState = {
  city: cities[0],
  offers,
  activeOffer: null,
  sortBy: SORT_OPTIONS[0]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(changeSortByValue, (state, action) => {
      state.sortBy = action.payload;
    });
});

export { reducer };
