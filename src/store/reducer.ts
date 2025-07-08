import { createReducer } from '@reduxjs/toolkit';
import {
  changeActiveOffer,
  changeCity,
  changeSortByValue,
  requireAuthorization,
  setError,
  setLoadingStatus,
  setOffersRent,
  setOfferPage,
  setComments,
  setNearOffers,
  setErrorStatus,
  setFavorites,
  changeFavorites
} from './action';
import { Offer } from '../types/offer';
import { cities } from '../mocks/cities';
import City from '../types/city';
import { AuthorizationStatus, FavoriteStatus, SORT_OPTIONS } from '../components/const';
import { TOfferPage } from '../types/TOfferPage';
import { Comment } from '../types/comment';
import { NotFoundPageStatus } from '../components/const';

type itemsState = {
  city: City;
  offers: Offer[];
  offerPage: TOfferPage | null;
  activeOffer: Offer | null;
  sortBy: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isLoadingStatus: boolean;
  comments: Comment[];
  nearOffers: Offer[];
  errorStatus: NotFoundPageStatus;
  favorites: Offer[];
}

const initialState: itemsState = {
  city: cities[0],
  offers: [],
  offerPage: null,
  activeOffer: null,
  sortBy: SORT_OPTIONS[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isLoadingStatus: false,
  comments: [],
  nearOffers: [],
  errorStatus: NotFoundPageStatus.Unknown,
  favorites: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffersRent, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOfferPage, (state, action) => {
      state.offerPage = action.payload;
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
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setErrorStatus, (state, action) => {
      state.errorStatus = action.payload;
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(changeFavorites, (state, action) => {
      switch (action.payload.status) {
        case FavoriteStatus.Add:
          state.favorites.push(action.payload.offer);
          break;
        case FavoriteStatus.Remove:
          state.favorites = state.favorites.filter(({id}) => id !== action.payload.offer.id);
      }
    });
});

export { reducer };
