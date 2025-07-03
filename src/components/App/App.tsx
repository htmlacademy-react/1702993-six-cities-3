import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import ErrorPage from '../../pages/error-page/error-page';
import { AppRoute, AuthorizationStatus } from '../const';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../store';
import LoadingScreen from '../loading-screen/loading-screen';
import HistoryRouter from '../history-route';
import browserHistory from '../../services/browser-history';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersLoading = useAppSelector((state) => state.isLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    // что за HelmetProvider, который использовался в демке на 1ч:38м
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element=
            {
              <MainPage />
            }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              {
                <FavoritePage />
              }
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
            <OfferPage />
          }
        />
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
