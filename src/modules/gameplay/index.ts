import { combineReducers } from 'redux';
//
import { reducer as vocabularyReducer } from './vocabulary';

export default combineReducers({
  vocabularies: vocabularyReducer
});
