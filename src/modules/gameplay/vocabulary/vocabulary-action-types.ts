import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/gameplay/vocabulary';
export default createActionTypes(modulePath, ['CLEAR', 'GET_RAND_VOCAB']);
