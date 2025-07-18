import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../components/const';
import { PageStatus } from '../../../components/const';

type DataProcess = {
  error: string | null;
  isLoadingStatus: boolean;
  pageStatus: PageStatus;
}

const initialState: DataProcess = {
  error: null,
  isLoadingStatus: false,
  pageStatus: PageStatus.Unknown,
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
    setPageStatus: (state, action: PayloadAction<PageStatus>) => {
      state.pageStatus = action.payload;
    }
  },
  extraReducers() {

  }
});

export const { setError, setLoadingStatus, setPageStatus } = dataProcces.actions;
