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

export const URL_MARKER_DEFAULT = '../../public/img/pin.svg';
export const URL_MARKER_ACTIVE = '../../public/img/pin-active.svg';
