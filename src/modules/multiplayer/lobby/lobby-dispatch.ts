import { createAsyncThunk } from '@reduxjs/toolkit';
//

import services from './lobby-services';
import actionTypes from './lobby-action-types';

const getLobbyDispatch = createAsyncThunk(
  actionTypes.GET_LOBBY,
  async (_, { rejectWithValue }) => {
    try {
      const response = await services.getLobby();

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export default {
  getLobbyDispatch
};
