import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './vocabulary-dispatch';
import actionTypes from './vocabulary-action-types';
import { IVocabulary } from './vocabulary-services';
interface InitialState {
  //

  isVocabularyLoading: boolean;
  vocabulary: IVocabulary[];
}

const initialState = {
  //
  isVocabularyLoading: false,
  vocabulary: []
} as InitialState;

const reducer = createReducer(initialState, (builder) => {
  //
  builder.addCase(actionTypes.CLEAR, (state) => {
    state.isVocabularyLoading = false;
    state.vocabulary = [];
  });

  builder.addCase(dispatch.getRandomVocabularyDispatch.pending, (state) => {
    state.isVocabularyLoading = true;
  });

  builder.addCase(
    dispatch.getRandomVocabularyDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isVocabularyLoading = false;
      state.vocabulary = action.payload.data.vocabs;
    }
  );

  builder.addCase(
    dispatch.getRandomVocabularyDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isVocabularyLoading = false;
    }
  );
});

export default reducer;
