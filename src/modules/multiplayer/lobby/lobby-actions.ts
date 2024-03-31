import createAction from '@/utils/createAction';
import actionTypes from './lobby-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  getRandVocab: actionTypes.GET_LOBBY
});
