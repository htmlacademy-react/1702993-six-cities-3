import leaflet, { LeafletEventHandlerFnMap } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../const';
import TypeCity from '../../types/TypeCity';
import { useEffect, useRef, useState } from 'react';
import { OfferValue } from '../../types/offer';

type MapProps = {
  className?: string;
  city: TypeCity;
  offers: OfferValue[];
  activeOfferId: string;
}

function Map({ className, city, offers, activeOfferId }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const isRenderedRef = useRef(false);
  const [map, setMap] = useState<LeafletEventHandlerFnMap | null>(null);
  console.log(activeOfferId);
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
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom
      });
      setMap(instance);
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

      if (instance) {
        offers.forEach((offer) => leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: offer.id === activeOfferId ? activeMarkerIcon : defaultCustomIcon
        })
          .addTo(instance));
      }
      isRenderedRef.current = true;
    }
  }, [mapRef, city, offers, map, className, activeOfferId, activeMarkerIcon, defaultCustomIcon]);

  return <section className={`map ${className}`} ref={mapRef}> </section>;
}
export default Map;
