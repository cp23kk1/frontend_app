import { createAsyncThunk } from '@reduxjs/toolkit';
//

import services from './user-core-services';
import actionTypes from './user-core-action-types';

const getUserProfileDispatch = createAsyncThunk(
  actionTypes.GET_RAND_VOCAB,
  async (_, { rejectWithValue }) => {
    try {
      const response = await services.getUserProfile();

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
export default {
  getUserProfileDispatch
};
