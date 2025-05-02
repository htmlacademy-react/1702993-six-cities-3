import { Link } from 'react-router-dom';

function ErrorPage (): JSX.Element {
  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div>
          <p>
            404 страница не найдена
          </p>
          <Link to='/'>
            Вернуться на главную страницу
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
