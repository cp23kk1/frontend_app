import { createAsyncThunk } from '@reduxjs/toolkit';
//

import services, { IGameResultRequest } from './game-result-services';
import actionTypes from './game-result-action-types';

const createGameResultDispatch = createAsyncThunk(
  actionTypes.CREATE_GAME_RESULT,
  async (gameResult: IGameResultRequest, { rejectWithValue }) => {
    try {
      await services.createGameResultHistory(gameResult);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
export default {
  createGameResultDispatch
};
