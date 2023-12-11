import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import { TGameHistory } from './type';
import { v4 as uuid } from 'uuid';
import { actionTypes } from '.';
interface InitialState {
  //

  currentGameHistory: TGameHistory;
}

const initialState = {
  //

  currentGameHistory: {
    gameId: uuid(),
    current_score: 0,
    vocabs: [],
    passages: [],
    sentences: []
  }
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.currentGameHistory = {
      gameId: uuid(),
      current_score: 0,
      vocabs: [],
      passages: [],
      sentences: []
    };
  });

  builder.addCase(
    actionTypes.CHANGE_CURRENT_GAME_HISTORY,
    (state, action: PayloadAction<TGameHistory>) => {
      state.currentGameHistory = action.payload;
    }
  );
});

export default reducer;
