import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
function ErrorPage (): JSX.Element {
  return(
    <div className="page page--gray page--login">
      <Header />

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
