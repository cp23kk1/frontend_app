import { combineReducers } from 'redux';
//
import { reducer as webSocketReducer } from './web-socket-core';

export default combineReducers({
  webSocket: webSocketReducer
});
