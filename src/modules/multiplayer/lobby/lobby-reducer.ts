import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './lobby-dispatch';
import actionTypes from './lobby-action-types';
import { ILobby } from './lobby-services';

interface InitialState {
  //

  isLobbyLoading: boolean;
  isUpdateLobbyLoading: boolean;
  lobby: ILobby[];
}

const initialState = {
  //
  isLobbyLoading: false,
  isUpdateLobbyLoading: false,
  lobby: []
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.isLobbyLoading = false;
    state.isUpdateLobbyLoading;
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

  builder.addCase(dispatch.updateLobbyDispatch.pending, (state) => {
    state.isUpdateLobbyLoading = true;
  });

  builder.addCase(
    dispatch.updateLobbyDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isUpdateLobbyLoading = false;
    }
  );

  builder.addCase(
    dispatch.updateLobbyDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isUpdateLobbyLoading = false;
    }
  );
});

export default reducer;
