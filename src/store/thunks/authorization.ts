import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../../components/const';
import { requireAuthorization, setUserInformation } from '../slices/user-process/user-slice';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { removeToken, saveToken } from '../../services/token';
import { User } from '../../types/user-information';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<User>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserInformation({email: data.email, avatarUrl: data.avatarUrl}));
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
    dispatch(setUserInformation({email: data.email, avatarUrl: data.avatarUrl}));
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
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
