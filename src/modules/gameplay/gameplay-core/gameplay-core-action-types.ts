import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/websocket';
export default createActionTypes(modulePath, [
  'CLEAR',
  'CHANGE_CURRENT_GAME_HISTORY'
]);
