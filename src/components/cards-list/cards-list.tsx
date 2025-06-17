import OfferCard from '../offer-card/offer-card';
import { useState } from 'react';
import { Offer } from '../../types/offer';
import { Nullable } from 'vitest';
type CardListProps = {
  offers: Offer[];
  variantClassCardList: string;
  variantClassCard: string;
}

function CardsList({ offers, variantClassCardList, variantClassCard }: CardListProps) {
  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  const handleOffer = (offer?: Offer) => {
    setActiveOffer(offer || null);
  };

  return (
    <div
      className={`${variantClassCardList}list places__list tabs__content`}
    >
      {
        offers.map((offer) =>
          (
            <OfferCard
              key={offer.id}
              offer={offer}
              handleOffer={handleOffer}
              variant={variantClassCard}
            />
          ))
      }
    </div>
  );
}

export default CardsList;
