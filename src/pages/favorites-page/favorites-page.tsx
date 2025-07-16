import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import { useAppSelector } from '../../store';
import { AppRoute, AuthorizationStatus } from '../../components/const';
import { Link, Navigate } from 'react-router-dom';
import { Offer } from '../../types/offer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import { getFavorites } from '../../store/offers-process/offers-selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-selecrors';

function FavoritePage(): JSX.Element {
  const offers = useAppSelector(getFavorites);
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (authStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Login} />;
  }

  const cities: string[] = [];

  const offersByCity: Record<string, Offer[]> = {};

  for (const offer of offers) {
    const city = offer.city.name;
    if (city in offersByCity) {
      offersByCity[city].push(offer);
      continue;
    }

    cities.push(city);
    offersByCity[city] = [offer];
    continue;
  }

  return (
    <div className={`page ${offers.length === 0 ? 'page--favorites-empty' : ''}`}>
      <Header />
      {offers.length === 0 ? <FavoritesEmpty />
        : (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {
                    cities.map((city) => (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          <CardsList
                            offers={offersByCity[city]}
                            variant='favorites'
                            near={false}
                          />
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </section>
            </div>
          </main>
        )}
      <footer className="footer container">
        <Link to={AppRoute.Main} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritePage;
