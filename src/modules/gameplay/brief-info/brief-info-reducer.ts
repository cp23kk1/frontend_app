import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './brief-info-dispatch';
import actionTypes from './brief-info-action-types';
import { IWord } from './type';
interface InitialState {
  //

  isBriefInfoLoading: boolean;
  briefInfo?: IWord;
}

const initialState = {
  //
  isBriefInfoLoading: false,
  briefInfo: undefined
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.isBriefInfoLoading = false;
    state.briefInfo = undefined;
  });

  builder.addCase(dispatch.getBriefInfoDispatch.pending, (state) => {
    state.isBriefInfoLoading = true;
  });

  builder.addCase(
    dispatch.getBriefInfoDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isBriefInfoLoading = false;
      state.briefInfo = action.payload[0];
    }
  );

  builder.addCase(
    dispatch.getBriefInfoDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isBriefInfoLoading = false;
    }
  );
});

export default reducer;
