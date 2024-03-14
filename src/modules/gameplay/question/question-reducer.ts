import { type PayloadAction, createReducer } from '@reduxjs/toolkit';
import dispatch from './question-dispatch';
import actionTypes from './question-action-types';
import {
  IQuestion,
  IQuestionSinglePlayerResponse,
  IVocabulary
} from './question-services';
interface InitialState {
  //

  isVocabularyLoading: boolean;
  isQuestionsLoading: boolean;
  vocabulary: IVocabulary[];
  questions: IQuestion[];
}

const initialState = {
  //
  isVocabularyLoading: false,
  isQuestionsLoading: false,
  vocabulary: [],
  questions: [],
  passageQuestions: []
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
      state.questions = state.questions.concat(
        action.payload.data.questions.concat(
          action.payload.data.passageQuestion
        )
      );
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
