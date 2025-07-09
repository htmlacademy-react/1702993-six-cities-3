import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../const';

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const favoritesOffersCount = useAppSelector((state) => state.favorites);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authStatus === AuthorizationStatus.Auth &&
                <li className="header__nav-item user">
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoritesOffersCount.length}</span>
                  </Link>
                </li>
              }
              <li className="header__nav-item">
                <Link
                  to={AppRoute.Main}
                  className="header__nav-link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                    navigate(AppRoute.Login);
                  }}
                >
                  <span className="header__signout">Sign {authStatus === AuthorizationStatus.Auth ? 'out' : 'in'}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
