import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';
import { Offer } from '../../types/offer';
import { Nullable } from 'vitest';
type CardListProps = {
  offers: Offer[];
  variant: 'main' | 'offer';
}

function CardsList({ offers, variant }: CardListProps) {
  const SETTINGS = {
    main: 'cities__places-list',
    offer: 'near-places__list'
  };

  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  const handleOffer = (offer?: Offer) => {
    setActiveOffer(offer || null);
  };

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
              handleOffer={handleOffer}
              variant={variant}
            />
          ))
      }
    </div>
  );
}

export default CardsList;
