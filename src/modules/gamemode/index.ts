import { combineReducers } from 'redux';
import { reducer as gamemodeReducer } from './gamemode-core';
export default combineReducers({
  gamemode: gamemodeReducer
});
