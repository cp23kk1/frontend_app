import createActionTypes from '@/utils/createActionTypes';
const modulePath = 'modules/gameplay/vocabulary';
export default createActionTypes(modulePath, ['CLEAR', 'CREATE_GAME_RESULT']);
