import { combineReducers } from 'redux';
//
import { reducer as settingReducer } from './setting';

export default combineReducers({
  setting: settingReducer
});
