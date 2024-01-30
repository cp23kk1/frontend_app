import { createAsyncThunk } from '@reduxjs/toolkit';
//

import services from './auth-services';
import actionTypes from './auth-action-types';
const guestLoginDispatch = createAsyncThunk(
  actionTypes.GET_RAND_VOCAB,
  async (_, { rejectWithValue }) => {
    try {
      await services.guestLogin();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
const logoutDispatch = createAsyncThunk(
  actionTypes.GET_RAND_VOCAB,
  async (_, { rejectWithValue }) => {
    try {
      await services.logout();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
const refreshDispatch = createAsyncThunk(
  actionTypes.GET_RAND_VOCAB,
  async (_, { rejectWithValue }) => {
    try {
      await services.refresh();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
export default {
  guestLoginDispatch,
  logoutDispatch,
  refreshDispatch
};
