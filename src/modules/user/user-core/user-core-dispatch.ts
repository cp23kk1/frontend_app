import { createAsyncThunk } from '@reduxjs/toolkit';
//

import services from './user-core-services';
import actionTypes from './user-core-action-types';

const getUserProfileDispatch = createAsyncThunk(
  actionTypes.GET_USER_PROFILE,
  async (_, { rejectWithValue }) => {
    try {
      const response = await services.getUserProfile();

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
const getUserStatisticDispatch = createAsyncThunk(
  actionTypes.GET_USER_STATISTICS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await services.getUserStatistic();

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const updateUserDisplayNameDispatch = createAsyncThunk(
  actionTypes.PUT_USER_DISPLAYNAME,
  async (
    { newDisplayName }: { newDisplayName: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await services.updateUserDisplayName(newDisplayName);

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
export default {
  getUserProfileDispatch,
  getUserStatisticDispatch,
  updateUserDisplayNameDispatch
};
