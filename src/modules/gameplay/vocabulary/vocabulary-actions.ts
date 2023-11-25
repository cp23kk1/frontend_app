import createAction from '@/utils/createAction';
import actionTypes from './vocabulary-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  getRandVocab: actionTypes.GET_RAND_VOCAB
});
