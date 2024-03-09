import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './user-core-dispatch';
import actionTypes from './user-core-action-types';
import { IUserResponse } from './user-core-services';
interface InitialState {
  //

  isUserProfileLoading: boolean;
  userProfile?: IUserResponse;
}

const initialState = {
  //
  isUserProfileLoading: false,
  userProfile: undefined
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.isUserProfileLoading = false;
    state.userProfile = undefined;
  });

  builder.addCase(dispatch.getUserProfileDispatch.pending, (state) => {
    state.isUserProfileLoading = true;
  });

  builder.addCase(
    dispatch.getUserProfileDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isUserProfileLoading = false;
      state.userProfile = action.payload.data;
    }
  );

  builder.addCase(
    dispatch.getUserProfileDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isUserProfileLoading = false;
      state.userProfile = undefined;
    }
  );
});

export default reducer;
