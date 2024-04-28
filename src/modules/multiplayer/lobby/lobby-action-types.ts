import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/gameplay/question';
export default createActionTypes(modulePath, [
  'CLEAR',
  'GET_LOBBY',
  'UPDATE_LOBBY'
]);
