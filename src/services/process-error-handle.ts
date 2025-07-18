import { store } from '../store';
import { setError } from '../store/slices/data-slice/data-slice';
import { clearErrorAction } from '../store/thunks/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
