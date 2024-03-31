import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './lobby-dispatch';
import actionTypes from './lobby-action-types';
import { ILobby } from './lobby-services';

interface InitialState {
  //

  isLobbyLoading: boolean;
  lobby: ILobby[];
}

const initialState = {
  //
  isLobbyLoading: false,
  lobby: []
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.isLobbyLoading = false;
    state.lobby = [];
  });

  builder.addCase(dispatch.getLobbyDispatch.pending, (state) => {
    state.isLobbyLoading = true;
  });

  builder.addCase(
    dispatch.getLobbyDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isLobbyLoading = false;
      state.lobby = action.payload.data.lobby;
    }
  );

  builder.addCase(
    dispatch.getLobbyDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isLobbyLoading = false;
    }
  );
});

export default reducer;
