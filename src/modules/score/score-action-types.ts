import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/score';
export default createActionTypes(modulePath, [
  'CLEAR',
  'GET_LEADER_BOARD',
  'GET_BEST_SCORE'
]);
