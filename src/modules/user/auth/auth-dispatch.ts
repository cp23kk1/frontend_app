import { createAsyncThunk } from '@reduxjs/toolkit';
//

import services from './auth-services';
import actionTypes from './auth-action-types';

const guestLoginDispatch = createAsyncThunk(
  actionTypes.GUEST,
  async (_, { rejectWithValue }) => {
    try {
      await services.guestLogin();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
const logoutDispatch = createAsyncThunk(
  actionTypes.LOGOUT,
  async (_, { rejectWithValue }) => {
    try {
      await services.logout();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
const refreshDispatch = createAsyncThunk(
  actionTypes.REFRESH,
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
