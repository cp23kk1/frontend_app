import createAction from '@/utils/createAction';
import actionTypes from './web-socket-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  getLobby: actionTypes.GET_LOBBY,
  connectWs: actionTypes.CONNECT_WS
});
