import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import { useAppSelector } from '../../store';

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
              <b className="places__found">{offersCount} {offersCount > 1 ? 'places' : 'place'} to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                {/* <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span> */}
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={1}>Popular</li>
                  <li className="places__option" tabIndex={2}>Price: low to high</li>
                  <li className="places__option" tabIndex={3}>Price: high to low</li>
                  <li className="places__option" tabIndex={4}>Top rated first</li>
                </ul>
              </form>
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
