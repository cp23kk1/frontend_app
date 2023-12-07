import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/core/modal';
export default createActionTypes(modulePath, ['CLEAR', 'ON_OPEN', 'ON_CLOSE']);
