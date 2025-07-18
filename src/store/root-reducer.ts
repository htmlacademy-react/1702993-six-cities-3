import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../components/const';
import { dataProcces } from './slices/data-slice/data-slice';
import { offersProcces } from './slices/offers-slice/offers-slice';
import { userProcces } from './slices/user-process/user-slice';
import { reviewSlice } from './slices/comments-slice/comments-slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcces.reducer,
  [NameSpace.Offers]: offersProcces.reducer,
  [NameSpace.User]: userProcces.reducer,
  [NameSpace.Reviews]: reviewSlice.reducer
});
