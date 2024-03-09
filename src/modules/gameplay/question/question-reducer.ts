import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './question-dispatch';
import actionTypes from './question-action-types';
import {
  IQuestionSinglePlayerResponse,
  IVocabulary
} from './question-services';
interface InitialState {
  //

  isVocabularyLoading: boolean;
  isQuestionsLoading: boolean;
  vocabulary: IVocabulary[];
  question?: IQuestionSinglePlayerResponse;
}

const initialState = {
  //
  isVocabularyLoading: false,
  isQuestionsLoading: false,
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
      state.vocabulary = state.vocabulary.concat(action.payload.data.vocabs);
    }
  );

  builder.addCase(
    dispatch.getRandomVocabularyDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isVocabularyLoading = false;
    }
  );
  builder.addCase(dispatch.getQuestionSinglePlayerDispatch.pending, (state) => {
    state.isQuestionsLoading = true;
  });

  builder.addCase(
    dispatch.getQuestionSinglePlayerDispatch.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.isQuestionsLoading = false;
      state.question = action.payload.data;
    }
  );

  builder.addCase(
    dispatch.getQuestionSinglePlayerDispatch.rejected,
    (state, action: PayloadAction<any>) => {
      state.isQuestionsLoading = false;
    }
  );
});

export default reducer;
