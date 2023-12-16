import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './web-socket-dispatch';
import actionTypes from './web-socket-action-types';
import { ILobby } from './web-socket-services';

interface InitialState {
  //
  webSocket: WebSocket | null;
  isConnect: boolean;
  isConnecting: boolean;
  errorMessage: string | null;

  isLobbyLoading: boolean;
  lobby: ILobby[];
}

const initialState = {
  //
  webSocket: null,
  isConnect: false,
  isConnecting: false,
  errorMessage: null,
  isLobbyLoading: false,
  lobby: []
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.webSocket = null;
    state.isConnect = false;
    state.isConnecting = false;
  });

  builder.addCase(dispatch.connectWsDispatch.pending, (state) => {
    state.isConnecting = true;
    state.errorMessage = null;
  });

  builder.addCase(
    dispatch.connectWsDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.webSocket = action.payload.response;
      state.isConnecting = false;
      state.isConnect = true;
    }
  );

  builder.addCase(
    dispatch.connectWsDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.isConnecting = false;
    }
  );
  builder.addCase(dispatch.getLobbyDispatch.pending, (state) => {
    state.isLobbyLoading = true;
  });
  builder.addCase(
    dispatch.getLobbyDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.lobby = action.payload;
      state.isLobbyLoading = false;
    }
  );
  builder.addCase(
    dispatch.getLobbyDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.isLobbyLoading = false;
    }
  );
});

export default reducer;
