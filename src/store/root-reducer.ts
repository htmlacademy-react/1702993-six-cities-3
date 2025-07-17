import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../components/const';
import { dataProcces } from './data-process/data-process.slice';
import { offersProcces } from './offers-process/offers-process.slice';
import { userProcces } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcces.reducer,
  [NameSpace.Offers]: offersProcces.reducer,
  [NameSpace.User]: userProcces.reducer
});
