import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import ErrorPage from '../../pages/error-page/error-page';
import { AppRoute, AuthorizationStatus } from '../const';
import PrivateRoute from '../private-route/private-route';
import { OfferValue } from '../../types/offer';
import TypeCity from '../../types/TypeCity';
import { TypeComments } from '../../types/TypeComments';

type AppMainPageProps = {
  offersRentalCount: number;
  offers: OfferValue[];
  city: TypeCity;
  comments: TypeComments;
}

function App({ offersRentalCount, offers, city, comments }: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage
            offers={offers}
            offersRentalCount={offersRentalCount}
            city={city}
          />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              {<FavoritePage
                offers={offers}
              />}
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Offer}
          element={
            <OfferPage
              comments={comments}
              city={city}
              offers={offers}
            />}
        />
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
