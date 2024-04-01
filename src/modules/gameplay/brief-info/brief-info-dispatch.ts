import { createAsyncThunk } from '@reduxjs/toolkit';
//

import services from './brief-info-services';
import actionTypes from './brief-info-action-types';

const getBriefInfoDispatch = createAsyncThunk(
  actionTypes.GET_BRIEF_INFO,
  async ({ word }: { word: string }, { rejectWithValue }) => {
    try {
      const response = await services.getBreifInfo(word);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export default {
  getBriefInfoDispatch
};
