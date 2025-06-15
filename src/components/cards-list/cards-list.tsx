import OfferCard from '../offer-card/offer-card';
import { Fragment, useEffect, useState } from 'react';
import { OfferValue } from '../../types/offer';
import { Nullable } from 'vitest';
type CardListProps = {
  offers: OfferValue[];
  variantClassCardList: string;
  variantClassCard: string;
}

function CardsList({offers, variantClassCardList, variantClassCard}: CardListProps) {
  const [activeOffer, setActiveOffer] = useState<Nullable<OfferValue>>(null);
  const handleOffer = (offer?: OfferValue) => {
    setActiveOffer(offer || null);
  };

  return(
    <div
      className={`${variantClassCardList}list places__list tabs__content`}
    >
      {
        offers.map((offer) =>
          (<OfferCard
            key={offer.id}
            offer={offer}
            handleOffer={handleOffer}
            variant={variantClassCard}
          />))
      }
    </div>
  );
}

export default CardsList;
