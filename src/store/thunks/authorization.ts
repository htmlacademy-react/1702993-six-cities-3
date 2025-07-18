import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../../components/const';
import { requireAuthorization, setUserAvatar } from '../slices/user-process/user-slice';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { removeToken, saveToken } from '../../services/token';
import { removeUserName, saveUserName } from '../../services/user';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      saveUserName(data.email);
      dispatch(setUserAvatar(data.avatarUrl));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    saveUserName(data.email);
    dispatch(setUserAvatar(data.avatarUrl));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    removeUserName();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
