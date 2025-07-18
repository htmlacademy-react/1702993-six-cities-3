import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../components/const';
import { AuthorizationStatus } from '../../../components/const';


type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userAvatar: string;
}

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userAvatar: ''
};

export const userProcces = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUserAvatar: (state, action: PayloadAction<string>) => {
      state.userAvatar = action.payload;
    }
  },
  extraReducers() {

  }
});

export const {requireAuthorization, setUserAvatar} = userProcces.actions;
