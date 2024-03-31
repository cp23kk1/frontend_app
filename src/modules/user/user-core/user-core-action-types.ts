import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/user/user-core';
export default createActionTypes(modulePath, [
  'CLEAR',
  'GET_USER_PROFILE',
  'GET_USER_STATISTICS'
]);
