import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';
import { useDispatch } from 'react-redux';
import { changeActiveOffer } from '../../store/slices/offers-slice/offers-slice';
import { useAppSelector } from '../../store';
import { getSort } from '../../store/slices/offers-slice/offers-selectors';
import { useEffect } from 'react';

type CardListProps = {
  offers: Offer[];
  variant: 'main' | 'offer' | 'favorites';
  near: boolean;
}

function CardsList({ offers, variant, near }: CardListProps): JSX.Element {
  const SETTINGS = {
    main: 'cities__places-list',
    offer: 'near-places__list',
    favorites: 'favorites__places'
  };
  const selecredSortBy = useAppSelector(getSort);
  let sortedOffers = offers;
  const dispatch = useDispatch();

  useEffect(() =>
    (() => {
      dispatch(changeActiveOffer(null));
    }), []);

  const onOfferHoverMouse = (offer: Offer | null) => {
    dispatch(changeActiveOffer(offer));
  };

  if (selecredSortBy === 'Price: low to high') {
    sortedOffers = [...offers].sort((a, b) => a.price - b.price);
  }

  if (selecredSortBy === 'Price: high to low') {
    sortedOffers = [...offers].sort((a, b) => b.price - a.price);
  }

  if (selecredSortBy === 'Top rated first') {
    sortedOffers = [...offers].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div
      className={`${SETTINGS[variant]} places__list tabs__content`}
    >
      {
        sortedOffers.map((offer) =>
          (
            <OfferCard
              key={offer.id}
              offer={offer}
              offerId={offer.id}
              onOfferHoverMouse={onOfferHoverMouse}
              variant={variant}
              near={near}
            />
          ))
      }
    </div>
  );
}

export default CardsList;
