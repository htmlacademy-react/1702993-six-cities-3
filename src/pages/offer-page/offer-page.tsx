import ReviewForm from '../../components/review-form/review-form';
import { useParams } from 'react-router-dom';
import CommentsList from '../../components/comments-list/comments-list';
import Map from '../../components/map/map';
import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../store';
import { useCallback, useEffect } from 'react';
import { fetchNearOffersActions, fetchOfferPageActions, fetchOffersActions } from '../../store/thunks/offers';
import { fetchCommentsActions } from '../../store/thunks/comments';
import { AuthorizationStatus, MAX_NEAR_OFFERS, MAX_PHOTOS, MIN_NEAR_OFFERS, PageStatus } from '../../components/const';
import ErrorPage from '../error-page/error-page';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import { clearOfferPage } from '../../store/slices/offers-slice/offers-slice';
import ButtonFavorite from '../../components/button-favorite/button-favorite';
import { getNearOffers, getOfferPage, getOffers } from '../../store/slices/offers-slice/offers-selectors';
import { getComments } from '../../store/slices/comments-slice/comments-selectors';
import { getPageStatus } from '../../store/slices/data-slice/data-selectors';
import { getAuthorizationStatus } from '../../store/slices/user-process/user-selectors';
import { getRatingWidth } from '../../utils';

function OfferPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const offers = useAppSelector(getOffers);
  const offer = useAppSelector(getOfferPage);
  const comments = useAppSelector(getComments);
  const nearOffers = useAppSelector(getNearOffers).slice(MIN_NEAR_OFFERS, MAX_NEAR_OFFERS);
  const pageStatus = useAppSelector(getPageStatus);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const clearOffer = useCallback(() => {
    dispatch(clearOfferPage(null));
  }, [dispatch]);


  useEffect(() => {
    Promise.all([
      dispatch(fetchOfferPageActions(id as string)),
      dispatch(fetchCommentsActions(id as string)),
      dispatch(fetchNearOffersActions(id as string)),
    ]);

    if (offers.length === 0) {
      dispatch(fetchOffersActions());
    }
    return clearOffer();
  }, [dispatch, id, clearOffer]);

  if (!offer) {
    if (!offer && pageStatus === PageStatus.NotFound) {
      return <ErrorPage />;
    }
    return <LoadingScreen />;
  }

  const { city, bedrooms, description, goods, host, images, isPremium, maxAdults, price, title, type, rating } = offer;
  const currentOffer = offers.filter((offerItem) => offerItem.id === offer.id);
  const nearOffersPlusCurrent = nearOffers.concat(currentOffer);
  const ratingWidth = getRatingWidth(rating);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                images.slice(0, MAX_PHOTOS).map((item) =>
                  (
                    <div key={item} className="offer__image-wrapper">
                      <img className="offer__image" src={item} alt="Photo studio" />
                    </div>
                  )
                )
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ? <div className='offer__mark'><span>Premium</span></div> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <ButtonFavorite offer={offer} offerId={offer.id} fullOffer near={false} variant='fullOffer' />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${ratingWidth}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    goods.map((item) =>
                      (
                        <li
                          className="offer__inside-item"
                          key={item}
                        >
                          {item}
                        </li>
                      )
                    )
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro ? <span className="offer__user-status">Pro</span> : ''
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <CommentsList
                  comments={comments}
                />
                {
                  authStatus === AuthorizationStatus.Auth &&
                  <ReviewForm
                    offerId={offer.id}
                  />
                }
              </section>
            </div>
          </div>
          <Map
            className='offer__map'
            city={city}
            offers={nearOffersPlusCurrent}
            activeOfferId={id}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList
              offers={nearOffers}
              variant='offer'
              near
            />
          </section>
        </div>
      </main>
    </div >
  );
}

export default OfferPage;
