import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './game-result-dispatch';
import actionTypes from './game-result-action-types';
interface InitialState {
  //

  isCreateGameResultLoading: boolean;
}

const initialState = {
  //
  isCreateGameResultLoading: false
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.isCreateGameResultLoading = false;
  });

  builder.addCase(dispatch.createGameResultDispatch.pending, (state) => {
    state.isCreateGameResultLoading = true;
  });

  builder.addCase(
    dispatch.createGameResultDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isCreateGameResultLoading = false;
    }
  );

  builder.addCase(
    dispatch.createGameResultDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isCreateGameResultLoading = false;
    }
  );
});

export default reducer;
