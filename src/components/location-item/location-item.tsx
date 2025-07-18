import { useDispatch } from 'react-redux';
import { changeCity } from '../../store/slices/offers-slice/offers-slice';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import City from '../../types/city';

type LocationProps = {
  city: City;
  currentCity: City;
}

function LocationItem({ city, currentCity }: LocationProps): JSX.Element {
  const className = city.name === currentCity.name ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item';
  const dispatch = useDispatch();
  return (
    <li className="locations__item">
      <Link
        className={className}
        onClick={() => dispatch(changeCity(city))}
        to={AppRoute.Main}
      >
        <span>
          {city.name}
        </span>
      </Link>
    </li>
  );
}

export default LocationItem;
