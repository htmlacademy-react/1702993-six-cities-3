import { MAX_RATING } from './components/const';

export const getRatingWidth = (offerRating: number) => {
  const ratingWidth = Math.round(offerRating) * 100 / MAX_RATING;
  return ratingWidth;
};
