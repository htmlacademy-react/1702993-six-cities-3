import { Offer } from './offer';

export type postComment = {
  review: {
    comment: string;
    rating: number;
  };
  offerId: Offer['id'];
}
