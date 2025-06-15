import { offers } from './mocks/offers';
import { OfferValue } from './types/offer';

const MAX_NEAR_OFFERS = 3;

export const getNearOffers = (offer: OfferValue): OfferValue[] => {
  const nearOffers: OfferValue[] = [];

  for (let i = 0; i < offers.length; i++) {
    if (offers[i].id !== offer.id && offers[i].city.name === offer.city.name) {
      nearOffers.push(offers[i]);
    }

    if (nearOffers.length >= MAX_NEAR_OFFERS) {
      break;
    }
  }

  return nearOffers;
};
