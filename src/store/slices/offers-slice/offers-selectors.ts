import { NameSpace } from '../../../components/const';
import City from '../../../types/city';
import { Offer } from '../../../types/offer';
import { State } from '../../../types/state';
import { TOfferPage } from '../../../types/TOfferPage';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getOfferPage = (state: State): TOfferPage | null => state[NameSpace.Offers].offerPage;
export const getFavorites = (state: State): Offer[] => state[NameSpace.Offers].favorites;
export const getNearOffers = (state: State): Offer[] => state[NameSpace.Offers].nearOffers;
export const getActiveOffer = (state: State): Offer | null => state[NameSpace.Offers].activeOffer;
export const getCity = (state: State): City => state[NameSpace.Offers].city;
export const getSort = (state: State): string => state[NameSpace.Offers].sortBy;
