import { combineReducers } from 'redux';
//
import { reducer as vocabularyReducer } from './vocabulary';
import { reducer as gameplayCoreReducer } from './gameplay-core';
import { reducer as gameResultReducer } from './game-result';

export default combineReducers({
  vocabularies: vocabularyReducer,
  gameplayCore: gameplayCoreReducer,
  gameResult: gameResultReducer
});
