import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/gameplay-core';
export default createActionTypes(modulePath, [
  'CLEAR',
  'CHANGE_CURRENT_GAME_HISTORY'
]);
