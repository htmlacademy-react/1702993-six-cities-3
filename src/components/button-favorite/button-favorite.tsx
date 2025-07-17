import { Offer } from '../../types/offer';
import { changeFavorites, changeNearOfferFavoriteStatus, changeOfferPageFavoriteStatus } from '../../store/offers-process/offers-process.slice';
import { changeFavoritesActions } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../store';
import { AppRoute, AuthorizationStatus } from '../const';
import { useNavigate } from 'react-router-dom';
import { TOfferPage } from '../../types/TOfferPage';
import { getAuthorizationStatus } from '../../store/user-process/user-selecrors';

type ButtonFavoriteProps = {
  offer: Offer | TOfferPage;
  offerId: string;
  fullOffer: boolean;
  near: boolean;
  variant: 'cardOffer' | 'fullOffer';
}

function ButtonFavorite({ offer, offerId, fullOffer = false, near = false, variant }: ButtonFavoriteProps): JSX.Element {

  const SETTINGS = {
    cardOffer: {
      className: 'place-card',
      width: '18',
      height: '19'
    },
    fullOffer: {
      className: 'offer',
      width: '31',
      height: '33'
    }
  };

  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();


  const handleFavorite = () => {

    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
      return;
    }

    // спросить можно ли передать аргументы без объектов
    const changeFavorite = dispatch(changeFavoritesActions({ offerId: offerId, status: Number(!offer.isFavorite) }));
    dispatch(changeFavorites({ offer: offer, status: changeFavorite.arg.status }));

    if (!fullOffer) {
      if (near) {
        dispatch(changeNearOfferFavoriteStatus(offerId));
      }
    } else {
      dispatch(changeOfferPageFavoriteStatus());
    }
  };

  return (
    <button
      className={`${SETTINGS[variant].className}__bookmark-button button ${offer.isFavorite ? `${SETTINGS[variant].className}__bookmark-button--active` : ''}`}
      type="button"
      onClick={handleFavorite}
    >
      <svg className={`${SETTINGS[variant].className}__bookmark-icon`} width={SETTINGS[variant].width} height={SETTINGS[variant].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}


export default ButtonFavorite;
