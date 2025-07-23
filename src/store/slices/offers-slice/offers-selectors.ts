import { FavoritesOffersStatus, NameSpace } from '../../../components/const';
import City from '../../../types/city';
import { Offer } from '../../../types/offer';
import { State } from '../../../types/state';
import { OfferPage } from '../../../types/offer-page';
import { createSelector } from '@reduxjs/toolkit';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getOfferPage = (state: State): OfferPage | null => state[NameSpace.Offers].offerPage;
export const getFavorites = (state: State): Offer[] => state[NameSpace.Offers].favorites;
export const getNearOffers = (state: State): Offer[] => state[NameSpace.Offers].nearOffers;
export const getActiveOffer = (state: State): Offer | null => state[NameSpace.Offers].activeOffer;
export const getCity = (state: State): City => state[NameSpace.Offers].city;
export const getSort = (state: State): string => state[NameSpace.Offers].sortBy;
export const getFavoritesOffersStatus = (state: State): FavoritesOffersStatus => state[NameSpace.Offers].favoriteOffersStatus;

export const selectedSortedOffers = createSelector(
  [getOffers, getSort],
  (offers, sortBy) => {
    switch (sortBy) {
      case 'Price: low to hight':
        return [...offers].sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return [...offers].sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return [...offers].sort((a, b) => b.rating - a.rating);
    }
  }
);

// if (selecredSortBy === 'Price: low to high') {
//     sortedOffers = [...offers].sort((a, b) => a.price - b.price);
//   }

//   if (selecredSortBy === 'Price: high to low') {
//     sortedOffers = [...offers].sort((a, b) => b.price - a.price);
//   }

//   if (selecredSortBy === 'Top rated first') {
//     sortedOffers = [...offers].sort((a, b) => b.rating - a.rating);
//   }
