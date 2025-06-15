import { Link } from 'react-router-dom';
import { OfferValue } from '../../types/offer';

type OfferCardProps = {
  offer: OfferValue;
  variant?: string;
  handleOffer: (offer?: OfferValue) => void;
}

function PlaceCard({ offer, handleOffer, variant }: OfferCardProps): JSX.Element {
  const handleHover = () => {
    handleOffer(offer);
  };
  const handleUnHover = () => {
    handleHover();
  };

  return (
    <Link to={`/offer/${offer.id}`}>
      <article
        className={`${variant}__card place-card`}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnHover}
      >
        {
          offer?.isPremium && <div className="place-card__mark"><span>Premium</span></div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"></img>
          </a>
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
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </Link>
  );
}

export default PlaceCard;
