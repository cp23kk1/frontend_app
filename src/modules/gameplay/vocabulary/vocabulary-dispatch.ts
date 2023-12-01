import { createAsyncThunk } from '@reduxjs/toolkit';
//

import services from './vocabulary-services';
import actionTypes from './vocabulary-action-types';

export const getRandomVocabulary = createAsyncThunk(
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

export default {
  getRandomVocabulary
};
