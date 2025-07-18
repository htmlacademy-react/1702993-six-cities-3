import { AuthorizationStatus, NameSpace } from '../../../components/const';
import { State } from '../../../types/state';
import { User } from '../../../types/user-information';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserInformation = (state: State): User => state[NameSpace.User].userInfo;
