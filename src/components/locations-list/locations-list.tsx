import LocationItem from '../location-item/location-item';
import { CITIES } from '../const';
import City from '../../types/city';

type locationListProps = {
  currentCity: City;
}

function LocationsList({currentCity}: locationListProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES.map((item) =>
          (
            <LocationItem
              key={item.name}
              city={item}
              currentCity={currentCity}
            />
          ))
      }
    </ul >
  );
}

export default LocationsList;
