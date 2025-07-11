import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import { useAppSelector } from '../../store';
import Sort from '../../components/sort/sort';

function MainPage(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const currentOffers = offers.filter((offer) => offer.city.name === currentCity.name);
  const offersCount = currentOffers.length;
  const activeOffer = useAppSelector((state) => state.activeOffer);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList
              currentCity={currentCity}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} {offersCount > 1 ? 'places' : 'place'} to stay in {currentCity.name}</b>
              <Sort />
              <CardsList
                offers={currentOffers}
                variant='main'
              />
            </section>
            <div className="cities__right-section">
              <Map
                className='cities__map'
                offers={currentOffers}
                city={currentCity}
                activeOfferId={activeOffer?.id}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
