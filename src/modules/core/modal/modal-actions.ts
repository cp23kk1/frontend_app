import createAction from '@/utils/createAction';
import actionTypes from './modal-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  onOpen: actionTypes.ON_OPEN,
  onClose: actionTypes.ON_CLOSE
});
