import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../components/const';
import { AuthorizationStatus } from '../../../components/const';
import { User } from '../../../types/user-information';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: User;
}

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: {
    email: '',
    avatarUrl: ''
  }
};

export const userProcces = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUserInformation: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    }
  },
  extraReducers() {

  }
});

export const {requireAuthorization, setUserInformation} = userProcces.actions;
