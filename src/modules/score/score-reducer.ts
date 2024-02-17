import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './score-dispatch';
import actionTypes from './score-action-types';
import { IWeeklyScoreBoard } from './score-services';
interface InitialState {
  //

  isScoreBoardLoading: boolean;
  scoreBoard: IWeeklyScoreBoard[];
}

const initialState = {
  //
  isScoreBoardLoading: false,
  scoreBoard: []
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.isScoreBoardLoading = false;
    state.scoreBoard = [];
  });

  builder.addCase(dispatch.getLeaderBoardDispatch.pending, (state) => {
    state.isScoreBoardLoading = true;
  });

  builder.addCase(
    dispatch.getLeaderBoardDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isScoreBoardLoading = false;
      state.scoreBoard = action.payload.data.weeklyScore;
    }
  );

  builder.addCase(
    dispatch.getLeaderBoardDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isScoreBoardLoading = false;
    }
  );
});

export default reducer;
