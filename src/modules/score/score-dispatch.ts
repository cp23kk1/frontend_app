import { createAsyncThunk } from '@reduxjs/toolkit';
//

import services from './score-services';
import actionTypes from './score-action-types';

const getLeaderBoardDispatch = createAsyncThunk(
  actionTypes.GET_LEADER_BOARD,
  async (_, { rejectWithValue }) => {
    try {
      const response = await services.getTopLeaderBoard();

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const getBestScoreDispatch = createAsyncThunk(
  actionTypes.GET_BEST_SCORE,
  async (_, { rejectWithValue }) => {
    try {
      const response = await services.getBestScore();

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
export default {
  getLeaderBoardDispatch,
  getBestScoreDispatch
};
