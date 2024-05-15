import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './user-core-dispatch';
import actionTypes from './user-core-action-types';
import { IUserResponse, IUserStatistic } from './user-core-services';
interface InitialState {
  //

  isUserProfileLoading: boolean;
  isUserStatisticLoading: boolean;
  isUpdateDisplayNameLoading: boolean;
  userStatistic?: IUserStatistic;
  userProfile?: IUserResponse;
}

const initialState = {
  //
  isUserProfileLoading: false,
  isUserStatisticLoading: false,
  isUpdateDisplayNameLoading: false,
  userStatistic: undefined,
  userProfile: undefined
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.isUserProfileLoading = false;
    state.userProfile = undefined;
    state.isUserStatisticLoading = false;
    state.userStatistic = undefined;
    state.isUpdateDisplayNameLoading = false;
  });

  builder.addCase(dispatch.getUserStatisticDispatch.pending, (state) => {
    state.isUserStatisticLoading = true;
  });

  builder.addCase(
    dispatch.getUserStatisticDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isUserStatisticLoading = false;
      state.userStatistic = action.payload.data;
    }
  );

  builder.addCase(
    dispatch.getUserStatisticDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isUserStatisticLoading = false;
      state.userStatistic = undefined;
    }
  );

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

  builder.addCase(dispatch.updateUserDisplayNameDispatch.pending, (state) => {
    state.isUpdateDisplayNameLoading = true;
  });

  builder.addCase(
    dispatch.updateUserDisplayNameDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isUpdateDisplayNameLoading = false;
    }
  );

  builder.addCase(
    dispatch.updateUserDisplayNameDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isUpdateDisplayNameLoading = false;
    }
  );
});

export default reducer;
