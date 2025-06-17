import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../const';
import { useEffect, useRef } from 'react';
import { Offer } from '../../types/offer';
import UseMap from '../../hooks/use-map';
import { city } from '../../mocks/city';
type MapProps = {
  className?: string;

  offers: Offer[];
  activeOfferId?: string | undefined;
}

function Map({ className, offers, activeOfferId }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = UseMap({city, mapRef});
  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const activeMarkerIcon = leaflet.icon({
    iconUrl: URL_MARKER_ACTIVE,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }, {
        icon:
          offer.id === activeOfferId ? activeMarkerIcon : defaultCustomIcon,
      })
        .addTo(map));
    }
  }, [mapRef, city, offers, map, className, activeOfferId]);

  return <section className={`map ${className}`} ref={mapRef} /> ;
}
export default Map;
