import { createAsyncThunk } from '@reduxjs/toolkit';
//
import type { TConnectWsRequest, ILobby } from './web-socket-services';

import services from './web-socket-services';
import actionTypes from './web-socket-action-types';

export const connectWsDispatch = createAsyncThunk(
  actionTypes.CONNECT_WS,
  async (param: TConnectWsRequest, { rejectWithValue }) => {
    try {
      const response = services.connectWsService(param);
      return { response };
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const getLobbyDispatch = createAsyncThunk(
  actionTypes.GET_LOBBY,
  async (_, { rejectWithValue }) => {
    try {
      const response = await services.getLobbyService();
      console.log(response);

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export default {
  //
  connectWsDispatch,
  getLobbyDispatch
};

function rejectWithValue(): any {
  throw new Error('Function not implemented.');
}
