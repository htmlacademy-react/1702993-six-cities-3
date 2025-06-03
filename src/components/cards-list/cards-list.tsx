import OfferCard from '../place-card/place-card';
import { Fragment, useEffect, useState } from 'react';
import { OfferValue } from '../../types/offer';
import { Nullable } from 'vitest';
type CardListProps = {
  offers: OfferValue[];
}

function CardsList({offers}: CardListProps) {
  const [activeOffer, setActiveOffer] = useState<Nullable<OfferValue>>(null);
  const handleOffer = (offer?: OfferValue) => {
    setActiveOffer(offer || null);
  };

  return(
    <Fragment>
      {
        offers.map((offer) =>
          (<OfferCard
            key={offer.id}
            offer={offer}
            handleOffer={handleOffer}
          />))
      }
    </Fragment>
  );
}

export default CardsList;
