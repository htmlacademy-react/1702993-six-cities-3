import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import ErrorPage from '../../pages/error-page/error-page';
import { AppRoute, AuthorizationStatus } from '../const';
import PrivateRoute from '../private-route/private-route';

type AppMainPageProps = {
  offersRentalCount: number;
}

function App({offersRentalCount}: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offersRentalCount={offersRentalCount}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritePage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route path='offer/:id' element={<OfferPage />}></Route>
        <Route
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
