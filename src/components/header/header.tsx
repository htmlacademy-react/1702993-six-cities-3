import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchFavoritesActions } from '../../store/thunks/favorite';
import { logoutAction } from '../../store/thunks/authorization';
import { AppRoute, AuthorizationStatus } from '../const';
import { useEffect, useState } from 'react';
import { getUserName } from '../../services/user';
import { getAuthorizationStatus, getUserAvatarUrl } from '../../store/slices/user-process/user-selectors';
import { getFavorites } from '../../store/slices/offers-slice/offers-selectors';

function Header() {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const favoritesOffersCount = useAppSelector(getFavorites);
  const [userName, setUserName] = useState('');
  const avatar = useAppSelector(getUserAvatarUrl);

  useEffect(() => {
    const name = getUserName();
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesActions());
    }
    if (name) {
      setUserName(name);
    }
  }, []);

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
              <li className="header__nav-item user">
                <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {authStatus === AuthorizationStatus.Auth && <img src={avatar} alt="" />}
                  </div>
                  {
                    authStatus === AuthorizationStatus.Auth &&
                    <span className="header__user-name user__name">{userName}</span>
                  }
                  {
                    authStatus === AuthorizationStatus.Auth &&
                    <span className="header__favorite-count">{favoritesOffersCount.length}</span>
                  }
                  {
                    authStatus === AuthorizationStatus.NoAuth &&
                    <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
              <li className="header__nav-item">
                {
                  authStatus === AuthorizationStatus.Auth &&
                  <Link
                    to={AppRoute.Login}
                    className="header__nav-link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(logoutAction());
                    }}
                  >
                    <span className='header__signout'>Sign out</span>
                  </Link>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
