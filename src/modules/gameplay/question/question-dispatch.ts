import { createAsyncThunk } from '@reduxjs/toolkit';
//

import services from './question-services';
import actionTypes from './question-action-types';

const getRandomVocabularyDispatch = createAsyncThunk(
  actionTypes.GET_RAND_VOCAB,
  async (_, { rejectWithValue }) => {
    try {
      const response = await services.getRandomVocabulary();

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
const getQuestionSinglePlayerDispatch = createAsyncThunk(
  actionTypes.GET_QUESTION_SINGLEPLAYER,
  async (_, { rejectWithValue }) => {
    try {
      const response = await services.getQuestionSinglePlayer();

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
const getQuestionMultiPlayerDispatch = createAsyncThunk(
  actionTypes.GET_QUESTION_MULTIPLAYER,
  async (
    props: {
      mode: string;
      numberOfQuestion: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await services.getQuestionMultiplayer(props);

      return response;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
export default {
  getRandomVocabularyDispatch,
  getQuestionSinglePlayerDispatch,
  getQuestionMultiPlayerDispatch
};
