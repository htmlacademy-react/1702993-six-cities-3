import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { UserProcess } from '../../types/state';
import { AuthorizationStatus } from '../../components/const';


const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: ''
};

export const userProcces = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    }
  },
  extraReducers() {

  }
});

export const {requireAuthorization} = userProcces.actions;
