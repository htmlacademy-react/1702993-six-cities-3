import { store } from '../store';
import { Offer } from '../types/offer';
import { TOfferPage } from '../types/TOfferPage';
import { AuthorizationStatus } from '../components/const';
import { NotFoundPageStatus } from '../components/const';
import { City } from './city';
import { Comment } from './comment';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: string;
}

export type OffersProcess = {
  city: City;
  offers: Offer[];
  offerPage: TOfferPage | null;
  activeOffer: Offer | null;
  sortBy: string;
  nearOffers: Offer[];
  favorites: Offer[];
  comments: Comment[];
}

export type DataProcess = {
  error: string | null;
  isLoadingStatus: boolean;
  errorStatus: NotFoundPageStatus;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
