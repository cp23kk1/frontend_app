import { combineReducers } from 'redux';
//
import { reducer as userCoreReducer } from './user-core';
import { reducer as authReducer } from './auth';

export default combineReducers({
  userCore: userCoreReducer,
  auth: authReducer
});
