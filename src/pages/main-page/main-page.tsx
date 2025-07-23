import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import { useAppDispatch, useAppSelector } from '../../store';
import Sort from '../../components/sort/sort';
import { Fragment, useEffect } from 'react';
import { getActiveOffer, getCity, getOffers } from '../../store/slices/offers-slice/offers-selectors';
import { fetchOffersActions } from '../../store/thunks/offers';


function MainPage(): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity.name);
  const offersCount = currentOffers.length;
  const activeOffer = useAppSelector(getActiveOffer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (offers.length === 0) {
      dispatch(fetchOffersActions());
    }
  }, []);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${offers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList
              currentCity={currentCity}
            />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${offers.length === 0 ? 'cities__places-container--empty' : ''}`}>
            <section className={`${offers.length === 0 ? 'cities__no-places' : 'cities__places places'}`}>
              {offers.length === 0 ? (
                <div className='cities__status-wrapper tabs__content'>
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {currentCity.name}</p>
                </div>
              ) :
                <Fragment>
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersCount} {offersCount > 1 ? 'places' : 'place'} to stay in {currentCity.name}</b>
                  <Sort />
                  <CardsList
                    offers={currentOffers}
                    variant='main'
                    near={false}
                  />
                </Fragment>}
            </section>
            <div className="cities__right-section">
              {
                offersCount > 0 &&
                <Map
                  className='cities__map'
                  offers={currentOffers}
                  city={currentCity}
                  activeOfferId={activeOffer?.id}
                />
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
