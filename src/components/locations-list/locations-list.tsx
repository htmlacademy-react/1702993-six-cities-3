import LocationItem from '../location-item/location-item';
import { cities } from '../const';
import City from '../../types/city';

type locationListProps = {
  currentCity: City;
}

function LocationsList({currentCity}: locationListProps) {

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((item) =>
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
