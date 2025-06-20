import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  variant: 'main' | 'offer' | 'favorites';
  handleOffer: (offer?: Offer) => void;
}

function PlaceCard({ offer, handleOffer, variant }: OfferCardProps): JSX.Element {

  const SETTINGS = {
    main: {
      className: 'cities__card',
      with: '260',
      height: '200'
    },
    offer: {
      className: 'near-places__card',
      with: '260',
      height: '200'
    },
    favorites: {
      className: 'near-places__card',
      with: '150',
      height: '110'
    }
  };
  const handleHover = () => {
    handleOffer(offer);
  };
  const handleUnHover = () => {
    handleHover();
  };

  return (
    <article
      className={`${SETTINGS[variant].className} place-card`}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
    >
      {
        offer?.isPremium && <div className="place-card__mark"><span>Premium</span></div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={SETTINGS[variant].with} height={SETTINGS[variant].height} alt="Place image"></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
