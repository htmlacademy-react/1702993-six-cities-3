import { createReducer } from '@reduxjs/toolkit';
import { changeActiveOffer, changeCity, changeSortByValue, requireAuthorization, setError, setLoadingStatus, setOffersRent } from './action';
// import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';
import { cities } from '../mocks/cities';
import City from '../types/city';
import { AuthorizationStatus, SORT_OPTIONS } from '../components/const';

type itemsState = {
  city: City;
  offers: Offer[];
  activeOffer: Offer | null;
  sortBy: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isLoadingStatus: boolean;
}

const initialState: itemsState = {
  city: cities[0],
  offers: [],
  activeOffer: null,
  sortBy: SORT_OPTIONS[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isLoadingStatus: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffersRent, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(changeSortByValue, (state, action) => {
      state.sortBy = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoadingStatus = action.payload;
    });
});

export { reducer };
