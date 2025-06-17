import leaflet, { Map } from 'leaflet';
import City from '../types/city';
import { useEffect, useRef, useState } from 'react';

type UseMapProps = {
  city: City;
  mapRef: React.RefObject<HTMLElement | null>;
}

function UseMap({ mapRef, city }: UseMapProps) {

  const isRenderedRef = useRef<boolean>(false);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {

    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom
      });
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}
export default UseMap;
