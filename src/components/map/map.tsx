import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE, AuthorizationStatus} from '../const';
import { useEffect, useRef } from 'react';
import { Offer } from '../../types/offer';
import UseMap from '../../hooks/use-map';
import City from '../../types/city';
import { useAppSelector } from '../../store';

type MapProps = {
  className?: string;
  city: City;
  offers: Offer[];
  activeOfferId?: string | null;
}

function Map({ className, offers, activeOfferId, city }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = UseMap({ mapRef, city });
  const authStatus = useAppSelector((state) => state.authorizationStatus);

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

  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }, {
        icon:
          offer.id === activeOfferId ? activeMarkerIcon : defaultCustomIcon,
      })
        .addTo(markerLayer.current));
    }
  }, [mapRef, offers, map, className, activeOfferId, city, defaultCustomIcon, activeMarkerIcon]);

  return authStatus === AuthorizationStatus.Auth
    ? <section className={`map ${className}`} ref={mapRef} />
    : <section className={`${className} map`} />;
}
export default Map;
