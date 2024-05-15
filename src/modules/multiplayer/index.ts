import { combineReducers } from 'redux';
import { reducer as lobbyReducer } from './lobby';
export default combineReducers({
  lobby: lobbyReducer
});
