import { NameSpace, NotFoundPageStatus } from '../../components/const';
import { State } from '../../types/state';

export const getError = (state: State): string | null => state[NameSpace.Data].error;
export const getErrorStatus = (state: State): NotFoundPageStatus => state[NameSpace.Data].errorStatus;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isLoadingStatus;
