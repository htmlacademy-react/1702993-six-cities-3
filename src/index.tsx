import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

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
    />
  </React.StrictMode>
);
