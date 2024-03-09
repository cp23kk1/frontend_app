import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/user/auth';
export default createActionTypes(modulePath, [
  'CLEAR',
  'GUEST',
  'SIGN_OUT',
  'REFRESH'
]);
