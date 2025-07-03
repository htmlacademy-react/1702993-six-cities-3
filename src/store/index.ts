import { configureStore } from '@reduxjs/toolkit';
import {reducer} from './reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, State } from '../types/state';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';

// export const store = configureStore({reducer});
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<State> = useSelector;

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});
