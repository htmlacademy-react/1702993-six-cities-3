import { AuthorizationStatus, NameSpace } from '../../components/const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State): string => state[NameSpace.User].user;
