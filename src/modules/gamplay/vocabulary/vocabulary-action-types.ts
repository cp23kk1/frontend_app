import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/websocket';
export default createActionTypes(modulePath, ['CLEAR', 'GET_RAND_VOCAB']);
