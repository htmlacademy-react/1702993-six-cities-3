import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SORT_OPTIONS } from '../../../components/const';
import { CITIES } from '../../../components/const';
import { Offer } from '../../../types/offer';
import City from '../../../types/city';
import { OfferPage } from '../../../types/offer-page';
import { FavoriteStatus } from '../../../components/const';
import { NameSpace } from '../../../components/const';

type OffersProcess = {
  city: City;
  offers: Offer[];
  offerPage: OfferPage | null;
  activeOffer: Offer | null;
  sortBy: string;
  nearOffers: Offer[];
  favorites: Offer[];
}

const initialState: OffersProcess = {
  city: CITIES[0],
  offers: [],
  offerPage: null,
  activeOffer: null,
  sortBy: SORT_OPTIONS[0],
  nearOffers: [],
  favorites: [],
};

export const offersProcces = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOffersRent: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    changeActiveOffer: (state, action: PayloadAction<Offer | null>) => {
      state.activeOffer = action.payload;
    },
    changeSortByValue: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setOfferPage: (state, action: PayloadAction<OfferPage>) => {
      state.offerPage = action.payload;
    },
    setNearOffers: (state, action: PayloadAction<Offer[]>) => {
      state.nearOffers = action.payload;
    },
    setFavorites: (state, action: PayloadAction<Offer[]>) => {
      state.favorites = action.payload;
    },
    clearOffers: (state) => {
      state.offers = [];
    },
    clearOfferPage: (state, action: PayloadAction<null>) => {
      state.offerPage = action.payload;
    },
    changeFavorites: (state, action: PayloadAction<{ offer: Offer | OfferPage; status: FavoriteStatus }>) => {
      const index = state.offers.findIndex((offer) => action.payload.offer.id === offer.id);
      state.offers[index].isFavorite = !state.offers[index].isFavorite;
      switch (action.payload.status) {
        case FavoriteStatus.Add:
          state.favorites.push(state.offers[index]);
          break;
        case FavoriteStatus.Remove:
          state.favorites = state.favorites.filter(({ id }) => id !== action.payload.offer.id);
      }
    },
    changeNearOfferFavoriteStatus: (state, action: PayloadAction<string>) => {
      const index = state.nearOffers.findIndex((offer) => action.payload === offer.id);
      state.nearOffers[index].isFavorite = !state.nearOffers[index].isFavorite;
    },
    changeOfferPageFavoriteStatus: (state) => {
      state.offerPage!.isFavorite = !state.offerPage!.isFavorite;
    }
  },
  extraReducers() {
  }
});

export const {
  setOffersRent,
  changeCity,
  changeActiveOffer,
  changeSortByValue,
  setOfferPage,
  setNearOffers,
  setFavorites,
  clearOfferPage,
  changeFavorites,
  changeNearOfferFavoriteStatus,
  changeOfferPageFavoriteStatus,
  clearOffers
} = offersProcces.actions;
