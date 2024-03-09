import createAction from '@/utils/createAction';
import actionTypes from './question-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  getRandVocab: actionTypes.GET_RAND_VOCAB,
  getQuestionSingle: actionTypes.GET_QUESTION_SINGLEPLAYER
});
