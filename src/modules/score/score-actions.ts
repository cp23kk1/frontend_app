import createAction from '@/utils/createAction';
import actionTypes from './score-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  getLeaderBoard: actionTypes.GET_LEADER_BOARD
});
