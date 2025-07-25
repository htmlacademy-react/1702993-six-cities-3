import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import ButtonFavorite from '../button-favorite/button-favorite';
import { getRatingWidth } from '../../utils';
import { memo } from 'react';

type OfferCardProps = {
  offer: Offer;
  offerId: string;
  variant: 'main' | 'offer' | 'favorites';
  onOfferHoverMouse: (offer: Offer | null) => void;
  near: boolean;
}

function OfferCard ({ offer, onOfferHoverMouse, variant, offerId, near }: OfferCardProps): JSX.Element {

  const SETTINGS = {
    main: {
      className: 'cities',
      with: '260',
      height: '200'
    },
    offer: {
      className: 'near-places',
      with: '260',
      height: '200'
    },
    favorites: {
      className: 'favorites',
      with: '150',
      height: '110'
    }
  };
  const handleHover = () => {
    if (variant === 'main') {
      onOfferHoverMouse(offer);
    }
  };
  const handleUnHover = () => {
    if (variant === 'main') {
      onOfferHoverMouse(null);
    }
  };

  const ratingWidth = getRatingWidth(offer.rating);

  const {type} = offer;
  const offerType = type.slice(0, 1).toUpperCase() + type.slice(1);

  return (
    <article
      className={`${SETTINGS[variant].className}__card place-card`}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
    >
      {
        offer?.isPremium && <div className="place-card__mark"><span>Premium</span></div>
      }
      <div className={`${SETTINGS[variant].className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={SETTINGS[variant].with}
            height={SETTINGS[variant].height} alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonFavorite offer={offer} offerId={offerId} fullOffer={false} near={near} variant='cardOffer' />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article >
  );
}
const MemorizedOfferCard = memo(OfferCard);

export default MemorizedOfferCard;
