import createAction from '@/utils/createAction';
import actionTypes from './gameplay-core-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  changeGameHistory: actionTypes.CHANGE_CURRENT_GAME_HISTORY
});
