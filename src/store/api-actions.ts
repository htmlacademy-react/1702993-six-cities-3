import { createAsyncThunk } from '@reduxjs/toolkit';
import { postComment } from '../types/post-comment';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/offer';
import { changeProps } from '../types/change-comment';
import { APIRoute, AppRoute, AuthorizationStatus, NotFoundPageStatus, TIMEOUT_SHOW_ERROR } from '../components/const';
import {
  redirectToRoute,
  // requireAuthorization,
  // setComments,
  // setError,
  // setErrorStatus,
  // setFavorites,
  // setLoadingStatus,
  // setNearOffers,
  // setOfferPage,
  // setOffersRent,
} from './action';
import { setError, setErrorStatus, setLoadingStatus } from './data-process/data-process.slice';
import { setOffersRent, setOfferPage, setNearOffers, setFavorites, setComments } from './offers-process/offers-process.slice';
import { requireAuthorization } from './user-process/user-process.slice';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { removeToken, saveToken } from '../services/token';
import { store } from '.';
import { TOfferPage } from '../types/TOfferPage';
import { Comment } from '../types/comment';
import { removeUserName, saveUserName } from '../services/user';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);

export const fetchOffersActions = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffersRent',
  async (_arg, { dispatch, extra: api }) => {
    // dispatch(setLoadingStatus(true));
    const { data } = await api.get<Offer[]>(APIRoute.Offers);
    // dispatch(setLoadingStatus(false));
    dispatch(setOffersRent(data));
  },
);

export const fetchOfferPageActions = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOfferPage',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setErrorStatus(NotFoundPageStatus.Unknown));
    try {
      const { data } = await api.get<TOfferPage>(`${APIRoute.Offers}/${offerId}`);
      dispatch(setOfferPage(data));
      dispatch(setErrorStatus(NotFoundPageStatus.Succes));
    } catch {
      dispatch(setErrorStatus(NotFoundPageStatus.NotFound));
    }
  },
);

export const fetchNearOffersActions = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearOffers',
  async (offerId, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    dispatch(setLoadingStatus(false));
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(setNearOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const fetchFavoritesActions = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);
    dispatch(setFavorites(data));
  },
);

export const changeFavoritesActions = createAsyncThunk<void, changeProps, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'changeFavorites',
  async ({ offerId, status }, { extra: api }) => {
    await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${status}`);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    saveUserName(email);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(fetchFavoritesActions());
    dispatch(fetchOffersActions());
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    removeUserName();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(fetchFavoritesActions());
    dispatch(fetchOffersActions());
  }
);

export const fetchCommentsActions = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (offerId, { dispatch, extra: api }) => {
    const response = await api.get<Comment[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(setComments(response.data));
  }
);

export const postCommentAction = createAsyncThunk<void, postComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postComment',
  async ({
    offerId, review }, { dispatch, extra: api }) => {
    const comment = review.comment;
    const rating = Number(review.rating);
    await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, { comment, rating });
    dispatch(fetchCommentsActions(offerId));
  }
);
