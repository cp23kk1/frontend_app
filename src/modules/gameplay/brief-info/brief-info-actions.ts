import createAction from '@/utils/createAction';
import actionTypes from './brief-info-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  getBriefInfo: actionTypes.GET_BRIEF_INFO
});
