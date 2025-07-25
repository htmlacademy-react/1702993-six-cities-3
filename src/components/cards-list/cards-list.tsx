import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';
import { useDispatch } from 'react-redux';
import { changeActiveOffer } from '../../store/slices/offers-slice/offers-slice';
import { useEffect, useCallback, memo } from 'react';

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

  const dispatch = useDispatch();

  useEffect(() =>
    (() => {
      dispatch(changeActiveOffer(null));
    }), []);

  const onOfferHoverMouse = useCallback((offer: Offer | null) => {
    dispatch(changeActiveOffer(offer));
  }, []);

  return (
    <div
      className={`${SETTINGS[variant]} places__list tabs__content`}
    >
      {
        offers.map((offer) =>
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

const MemorizedCardsList = memo(CardsList);

export default MemorizedCardsList;
