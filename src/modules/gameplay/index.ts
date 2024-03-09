import { combineReducers } from 'redux';
//
import { reducer as vocabularyReducer } from './question';
import { reducer as gameplayCoreReducer } from './gameplay-core';
import { reducer as gameResultReducer } from './game-result';

export default combineReducers({
  question: vocabularyReducer,
  gameplayCore: gameplayCoreReducer,
  gameResult: gameResultReducer
});
