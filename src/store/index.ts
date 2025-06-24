import { configureStore } from '@reduxjs/toolkit';
import {reducer} from './reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, State } from '../types/state';

export const store = configureStore({reducer});
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<State> = useSelector;
