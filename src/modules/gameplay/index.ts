import { combineReducers } from 'redux';
//
import { reducer as vocabularyReducer } from './vocabulary';
import { reducer as gameplayCoreReducer } from './gameplay-core';

export default combineReducers({
  vocabularies: vocabularyReducer,
  gameplayCore: gameplayCoreReducer
});
