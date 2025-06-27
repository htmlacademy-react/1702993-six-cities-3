import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';
import { useDispatch } from 'react-redux';
import { changeActiveOffer } from '../../store/action';
import { useAppSelector } from '../../store';

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
  const selecredSortBy = useAppSelector((state) => state.sortBy);
  let sortedOffers = offers;

  const dispatch = useDispatch();
  const handleOffer = (offer: Offer | null) => {
    dispatch(changeActiveOffer(offer));
  };

  if(selecredSortBy === 'Price: low to high') {
    sortedOffers = [...offers].sort((a, b) => a.price - b.price);
  }

  if(selecredSortBy === 'Price: high to low') {
    sortedOffers = [...offers].sort((a, b) => b.price - a.price);
  }

  if(selecredSortBy === 'Top rated first') {
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
              handleOffer={handleOffer}
              variant={variant}
            />
          ))
      }
    </div>
  );
}

export default CardsList;
