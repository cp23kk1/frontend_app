import createAction from '@/utils/createAction';
import actionTypes from './game-result-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  createGameResult: actionTypes.CREATE_GAME_RESULT
});
