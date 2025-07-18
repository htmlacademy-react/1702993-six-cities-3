import { createAsyncThunk } from '@reduxjs/toolkit';
import { TIMEOUT_SHOW_ERROR } from '../../components/const';
import { setError } from '../slices/data-slice/data-slice';
import { store } from '..';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);
