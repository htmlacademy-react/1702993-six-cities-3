import { createAction } from '@reduxjs/toolkit';
// import { Offer } from '../types/offer';
// import City from '../types/city';
// import { AppRoute, AuthorizationStatus, FavoriteStatus} from '../components/const';
import { AppRoute } from '../components/const';
// import { TOfferPage } from '../types/TOfferPage';
// import { Comment } from '../types/comment';
// import { NotFoundPageStatus } from '../components/const';

// export const changeCity = createAction('changeCity', (value: City) => ({
//   payload: value
// }));
// export const setOffersRent = createAction('setOffersRent', (value: Offer[]) => ({
//   payload: value
// }));
// export const changeActiveOffer = createAction('changeActiveOffer', (value: Offer | null) => ({
//   payload: value
// }));
// export const changeSortByValue = createAction('changeSortByValue', (value: string) => ({
//   payload: value
// }));
// export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
// export const setError = createAction<string | null>('setError');
// export const setLoadingStatus = createAction<boolean>('setLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
// export const setOfferPage = createAction('setOfferPage', (value: TOfferPage) => ({
//   payload: value
// }));
// export const setComments = createAction('setComments', (value: Comment[]) => ({
//   payload: value
// }));
// export const setNearOffers = createAction('setNearOffers', (value: Offer[]) => ({
//   payload: value
// }));
// export const setErrorStatus = createAction<NotFoundPageStatus>('setErrorStatus');
// export const setFavorites = createAction<Offer[]>('setFavorites');
// export const changeFavorites = createAction('changeFavorites', (offer: Offer | TOfferPage, status: FavoriteStatus) => ({
//   payload: {offer: offer, status: status}
// }));
// export const clearOfferPage = createAction<null>('clearOfferPage');
// export const changeOfferFavoriteStatus = createAction<string>('changeOfferFavoriteStatus');
// export const changeNearOfferFavoriteStatus = createAction<string>('changeNearOfferFavoriteStatus');
export const changeOfferPageFavoriteStatus = createAction('changeOfferPageFavoriteStatus');
