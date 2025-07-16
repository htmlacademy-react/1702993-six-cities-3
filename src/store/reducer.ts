// import { createReducer } from '@reduxjs/toolkit';
// import {
//   changeActiveOffer,
//   changeCity,
//   changeSortByValue,
//   requireAuthorization,
//   setError,
//   setLoadingStatus,
//   setOffersRent,
//   setOfferPage,
//   setComments,
//   setNearOffers,
//   setErrorStatus,
//   setFavorites,
//   changeFavorites,
//   clearOfferPage,
//   changeOfferFavoriteStatus,
//   changeNearOfferFavoriteStatus,
//   changeOfferPageFavoriteStatus
// } from './action';
// import { Offer } from '../types/offer';
// import City from '../types/city';
// import { AuthorizationStatus, cities, FavoriteStatus, SORT_OPTIONS } from '../components/const';
// import { TOfferPage } from '../types/TOfferPage';
// import { Comment } from '../types/comment';
// import { NotFoundPageStatus } from '../components/const';

// type itemsState = {
// city: City;
// offers: Offer[];
// offerPage: TOfferPage | null;
// activeOffer: Offer | null;
// sortBy: string;
// error: string | null;
// isLoadingStatus: boolean;
// comments: Comment[];
// nearOffers: Offer[];
// errorStatus: NotFoundPageStatus;
// favorites: Offer[];
// authorizationStatus: AuthorizationStatus;
// user: string;
// }

// const initialState: itemsState = {
// city: cities[0],
// offers: [],
// offerPage: null,
// activeOffer: null,
// sortBy: SORT_OPTIONS[0],
// error: null,
// isLoadingStatus: false,
// comments: [],
// nearOffers: [],
// errorStatus: NotFoundPageStatus.Unknown,
// favorites: [],
// authorizationStatus: AuthorizationStatus.Unknown,
// user: ''
// };

// const reducer = createReducer(initialState, (builder) => {
// builder
// .addCase(setOffersRent, (state, action) => {
//   state.offers = action.payload;
// })
// .addCase(setOfferPage, (state, action) => {
//   state.offerPage = action.payload;
// })
// .addCase(changeCity, (state, action) => {
//   state.city = action.payload;
// })
// .addCase(changeActiveOffer, (state, action) => {
//   state.activeOffer = action.payload;
// })
// .addCase(changeSortByValue, (state, action) => {
//   state.sortBy = action.payload;
// })
// .addCase(requireAuthorization, (state, action) => {
//   state.authorizationStatus = action.payload;
// })
// .addCase(setError, (state, action) => {
//   state.error = action.payload;
// })
// .addCase(setLoadingStatus, (state, action) => {
//   state.isLoadingStatus = action.payload;
// })
// .addCase(setComments, (state, action) => {
//   state.comments = action.payload;
// })
// .addCase(setNearOffers, (state, action) => {
//   state.nearOffers = action.payload;
// })
// .addCase(setErrorStatus, (state, action) => {
//   state.errorStatus = action.payload;
// })
// .addCase(setFavorites, (state, action) => {
//   state.favorites = action.payload;
// })
// .addCase(clearOfferPage, (state, action) => {
//   state.offerPage = action.payload;
// })
// .addCase(changeFavorites, (state, action) => {
//   const index = state.offers.findIndex((offer) => action.payload.offer.id === offer.id);
//   state.offers[index].isFavorite = !state.offers[index].isFavorite;
//   switch (action.payload.status) {
//     case FavoriteStatus.Add:
//       state.favorites.push(state.offers[index]);
//       break;
//     case FavoriteStatus.Remove:
//       state.favorites = state.favorites.filter(({ id }) => id !== action.payload.offer.id);
//   }
// })
// .addCase(changeOfferFavoriteStatus, (state, action) => {
//   const index = state.offers.findIndex((offer) => action.payload === offer.id);
//   state.offers[index].isFavorite = !state.offers[index].isFavorite;
// })
// .addCase(changeNearOfferFavoriteStatus, (state, action) => {
//   const index = state.nearOffers.findIndex((offer) => action.payload === offer.id);
//   state.nearOffers[index].isFavorite = !state.nearOffers[index].isFavorite;
// })
// .addCase(changeOfferPageFavoriteStatus, (state) => {
//   state.offerPage!.isFavorite = !state.offerPage!.isFavorite;
// });
// });

// export { reducer };
