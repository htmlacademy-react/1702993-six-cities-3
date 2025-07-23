import City from '../types/city';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum CommentsStatus {
  Unkwnown = 'UNKWNOWN',
  Pending = 'PENDING',
  Succes = 'SUCCES',
  Failed = 'FAILED'
}

export enum FavoritesOffersStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Succes = 'SUCCES',
  Failed = 'FAILED'
}

export enum PageStatus {
  Unknown = 'UNKNOWN',
  NotFound = 'ERROR',
  Succes = 'SUCCES'
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite'
}

export enum NameSpace {
  Data = 'DATA',
  Offers = 'OFFERS',
  User = 'USER',
  Favorite = 'FAVORITE',
  Reviews = 'REVIEWS'
}

export enum FavoriteStatus {
  Add = 1,
  Remove = 0
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

export const CITIES: City[] = [
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

export const MONTHS_LIST = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


export const MIN_NEAR_OFFERS = 0;
export const MAX_NEAR_OFFERS = 3;
export const MAX_RATING = 5;
export const MAX_PHOTOS = 6;
export const MAX_COMMENTS_COUNT = 10;
