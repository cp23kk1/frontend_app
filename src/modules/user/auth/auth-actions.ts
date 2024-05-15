import createAction from '@/utils/createAction';
import actionTypes from './auth-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  guest: actionTypes.GUEST,
  signOut: actionTypes.SIGN_OUT,
  refresh: actionTypes.REFRESH
});
