import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/core/setting';
export default createActionTypes(modulePath, [
  'CLEAR',
  'ON_CHANGE_VOLUME',
  'ON_CHANGE_MUSIC',
  'ON_CHANGE_SOUNDEFFECT'
]);
