import City from '../types/city';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Error = '/error'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Offers ='/offers',
  Login = '/login',
  Logout = '/logout'
}

export const URL_MARKER_DEFAULT = '../../public/img/pin.svg';
export const URL_MARKER_ACTIVE = '../../public/img/pin-active.svg';

export const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const TIMEOUT_SHOW_ERROR = 5000;

export const cities: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 12
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 12
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 12
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.3730,
      longitude: 4.8921,
      zoom: 12
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 12
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 12
    }
  },
];
