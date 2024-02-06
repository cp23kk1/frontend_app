import createAction from '@/utils/createAction';
import actionTypes from './setting-action-types';

export default createAction({
  clear: actionTypes.CLEAR,
  onChangeVolume: actionTypes.ON_CHANGE_VOLUME,
  onChangeMusic: actionTypes.ON_CHANGE_MUSIC,
  onChangeSoundEffect: actionTypes.ON_CHANGE_SOUNDEFFECT
});
