import ReviewForm from '../../components/comment-form/comment-form';
import { useParams } from 'react-router-dom';
import { offersPage } from '../../mocks/offersPage';
import CommentsList from '../../components/comments-list/comments-list';
import Map from '../../components/map/map';
import { getNearOffers } from '../../utils';
import CardsList from '../../components/cards-list/cards-list';
import { offers } from '../../mocks/offers';
import { comments } from '../../mocks/comments';
import Header from '../../components/header/header';

function OfferPage(): JSX.Element {
  const params = useParams();
  const pageId = params.id?.toString();
  const offer = offersPage.find((offerItem) => offerItem.id === pageId);
  const offerCurrent = offers.find((offerItem) => offerItem.id === pageId);

  if (!offer || !offerCurrent) {
    return <div></div>;
  }

  const offerReviewsCount = comments.filter((comment) => comment.id === offer.id).length;
  const nearOffers = offers.filter((item) => item.city.name === offer.city.name);
  const nearOffersPlusCurrent = getNearOffers(offerCurrent);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                offer.images.map((item) =>
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
              <div className='offer__mark'>
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    offer.goods.map((item) =>
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
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {
                    offer.host.isPro ? <span className="offer__user-status"></span> : ''
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviewsCount}</span></h2>
                <CommentsList
                  offer={offer}
                />
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map
            className='offer__map'
            city={offer.city}
            offers={nearOffers}
            activeOfferId={offer.id}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList
              offers={nearOffersPlusCurrent}
              variant='offer'
            />
          </section>
        </div>
      </main>
    </div >
  );
}

export default OfferPage;
