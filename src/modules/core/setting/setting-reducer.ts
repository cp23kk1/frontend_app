import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { actionTypes } from '.';
import { ReactNode } from 'react';
import { Content } from 'next/font/google';
interface InitialState {
  //

  music: string;
  volume: string;
  soundEffect: string;
}

const initialState = {
  //
  music: '0',
  volume: '0',
  soundEffect: '0'
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.music = '0';
    state.volume = '0';
    state.soundEffect = '0';
  });

  builder.addCase(
    actionTypes.ON_CHANGE_VOLUME,
    (state, action: PayloadAction<string>) => {
      state.volume = action.payload;
    }
  );
  builder.addCase(
    actionTypes.ON_CHANGE_MUSIC,
    (state, action: PayloadAction<string>) => {
      state.music = action.payload;
    }
  );
  builder.addCase(
    actionTypes.ON_CHANGE_SOUNDEFFECT,
    (state, action: PayloadAction<string>) => {
      state.soundEffect = action.payload;
    }
  );
});

export default reducer;
