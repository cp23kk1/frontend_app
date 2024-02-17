import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/auth';
export default createActionTypes(modulePath, [
  'CLEAR',
  'GUEST',
  'SIGN_OUT',
  'REFRESH'
]);
