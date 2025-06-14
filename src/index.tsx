import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { offers } from './mocks/offers';

const Settings = {
  OffersRentalCount: 6,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersRentalCount = {Settings.OffersRentalCount}
      offers = {offers}
    />
  </React.StrictMode>
);
