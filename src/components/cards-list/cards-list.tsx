import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';
import { useDispatch } from 'react-redux';
import { changeActiveOffer } from '../../store/action';

type CardListProps = {
  offers: Offer[];
  variant: 'main' | 'offer' | 'favorites';
}

function CardsList({ offers, variant }: CardListProps) {
  const SETTINGS = {
    main: 'cities__places-list',
    offer: 'near-places__list',
    favorites: 'favorites__places'
  };
  const dispatch = useDispatch();
  const handleOffer = (offer: Offer | null) => {
    dispatch(changeActiveOffer(offer));
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
