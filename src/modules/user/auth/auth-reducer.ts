import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import { TGameHistory } from './type';
import { v4 as uuid } from 'uuid';
import { actionTypes } from '.';
import dispatch from './auth-dispatch';
interface InitialState {
  //
  isGuestLoginLoading: boolean;
}

const initialState = {
  //
  isGuestLoginLoading: false
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {});
  builder.addCase(dispatch.guestLoginDispatch.pending, (state) => {
    state.isGuestLoginLoading = true;
  });
  builder.addCase(dispatch.guestLoginDispatch.fulfilled, (state) => {
    state.isGuestLoginLoading = false;
  });
  builder.addCase(dispatch.guestLoginDispatch.rejected, (state) => {
    state.isGuestLoginLoading = false;
  });
});

export default reducer;
