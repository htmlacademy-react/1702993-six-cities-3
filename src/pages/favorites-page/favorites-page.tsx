import { useEffect } from 'react';
import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchFavoritesActions } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../components/const';
import { Navigate } from 'react-router-dom';
import { Offer } from '../../types/offer';

function FavoritePage(): JSX.Element {
  const offers = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    dispatch(fetchFavoritesActions());
  }, []);

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

  console.log(offersByCity);

  return (
    <div className="page">
      <Header />
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
                      />
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritePage;
