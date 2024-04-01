import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/gameplay/briefInfo';
export default createActionTypes(modulePath, ['CLEAR', 'GET_BRIEF_INFO']);
