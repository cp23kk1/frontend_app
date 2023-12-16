import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { actionTypes } from '.';
import { ReactNode } from 'react';
import { Content } from 'next/font/google';
interface InitialState {
  //

  content?: ReactNode;
  isModalOpen: boolean;
}

const initialState = {
  //
  isModalOpen: false
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.content = '';
    state.isModalOpen = false;
  });

  builder.addCase(
    actionTypes.ON_OPEN,
    (state, action: PayloadAction<ReactNode>) => {
      state.content = action.payload;
      state.isModalOpen = true;
    }
  );
  builder.addCase(actionTypes.ON_CLOSE, (state) => {
    state.isModalOpen = false;
    state.content = '';
  });
});

export default reducer;
