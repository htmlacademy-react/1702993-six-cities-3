import { NameSpace, PageStatus } from '../../../components/const';
import { State } from '../../../types/state';

export const getErrorStatus = (state: State): string | null => state[NameSpace.Data].error;
export const getPageStatus = (state: State): PageStatus => state[NameSpace.Data].pageStatus;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isLoadingStatus;
