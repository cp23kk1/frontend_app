import createAction from '@/utils/createAction';
import actionTypes from './user-core-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  getRandVocab: actionTypes.GET_USER_PROFILE,
  getUserStatistic: actionTypes.GET_USER_STATISTICS,
  updateUserDisplayName: actionTypes.PUT_USER_DISPLAYNAME
});
