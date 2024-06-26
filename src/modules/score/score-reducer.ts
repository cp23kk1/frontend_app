import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './score-dispatch';
import actionTypes from './score-action-types';
import { IBestScoreBoard, IWeeklyScoreBoard } from './score-services';
interface InitialState {
  //

  isScoreBoardLoading: boolean;
  scoreBoard: IWeeklyScoreBoard[];
  userScoreBoard?: IWeeklyScoreBoard;
  isBestScoreLoading: boolean;
  bestScore: number;
}

const initialState = {
  //
  isScoreBoardLoading: false,
  scoreBoard: [],
  userScoreBoard: undefined,
  isBestScoreLoading: false,
  bestScore: 0
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
      state.scoreBoard = action.payload.data.weeklyScore ?? [];
      state.userScoreBoard = action.payload.data.userScore;
    }
  );

  builder.addCase(
    dispatch.getLeaderBoardDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isScoreBoardLoading = false;
    }
  );
  builder.addCase(
    dispatch.getBestScoreDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isBestScoreLoading = false;
    }
  );
  builder.addCase(dispatch.getBestScoreDispatch.pending, (state) => {
    state.isBestScoreLoading = true;
  });

  builder.addCase(
    dispatch.getBestScoreDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isBestScoreLoading = false;

      state.bestScore = action.payload.data.bestScore
        ? action.payload.data.bestScore[0].score
        : 0;
    }
  );
});

export default reducer;
