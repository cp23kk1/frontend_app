import createAction from '@/utils/createAction';
import actionTypes from './lobby-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  getLobby: actionTypes.GET_LOBBY,
  updateLobby: actionTypes.UPDATE_LOBBY
});
