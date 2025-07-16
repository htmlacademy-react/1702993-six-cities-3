import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { DataProcess } from '../../types/state';
import { NotFoundPageStatus } from '../../components/const';

const initialState: DataProcess = {
  error: null,
  isLoadingStatus: false,
  errorStatus: NotFoundPageStatus.Unknown,
};

export const dataProcces = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoadingStatus = action.payload;
    },
    setErrorStatus: (state, action: PayloadAction<NotFoundPageStatus>) => {
      state.errorStatus = action.payload;
    }
  },
  extraReducers() {

  }
});

export const { setError, setLoadingStatus, setErrorStatus } = dataProcces.actions;
