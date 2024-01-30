import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import { TGameHistory } from './type';
import { v4 as uuid } from 'uuid';
import { actionTypes } from '.';
interface InitialState {
  //
}

const initialState = {
  //
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {});
});

export default reducer;
