import Modal from '@/components/common/Modal';

import { getPublicPath } from '@/utils/basePath';
import { Col } from '@/components/common/layout/responsive';
import { SettingModalWrapper } from './style';
import Icon from '../Icon';
import { TSettingModal } from './type';
import { useAppDispatch } from '@/hooks';
import settingActions from '@/modules/core/setting/setting-actions';

const SettingModal = ({
  onClickChangeButton,
  charaterPic,
  volumeValue,
  musicValue,
  soundEffectValue
}: TSettingModal) => {
  const dispatch = useAppDispatch();
  const handleChangeVolume = (value: string) => {
    dispatch(settingActions.onChangeVolume(value));
  };
  const handleChangeMusic = (value: string) => {
    dispatch(settingActions.onChangeMusic(value));
  };
  const handleChangeSoundEffect = (value: string) => {
    dispatch(settingActions.onChangeSoundEffect(value));
  };
  return (
    <SettingModalWrapper style={{ position: 'relative' }}>
      <Col span="6" className="character-frame">
        <div className="character">
          <img src={charaterPic} alt="player" />
        </div>
        <div className="button">
          <button className="change" onClick={onClickChangeButton}>
            Change
          </button>
        </div>
      </Col>
      <Col className="setting-frame">
        <div className="header">Setting</div>
        <div className="panel">
          <Col span="6" className="text-panel">
            <div>Volume</div>
            <div>Music</div>
            <div>Sound Effect</div>
          </Col>
          <Col className="setting-panel">
            <div className="input">
              <Icon iconName="Speaker" />
              <input
                type="range"
                min="0"
                max="100"
                value={volumeValue}
                className="slider"
                id="volume"
                onChange={(e) => {
                  handleChangeVolume(e.target.value);
                }}
              />
              <div className="value">{volumeValue}%</div>
            </div>
            <div className="input">
              <Icon iconName="Speaker" />
              <input
                type="range"
                min="0"
                max="100"
                value={musicValue}
                className="slider"
                id="music"
                onChange={(e) => {
                  handleChangeMusic(e.target.value);
                }}
              />
              <div className="value">{musicValue}%</div>
            </div>
            <div className="input">
              <Icon iconName="Speaker" />
              <input
                type="range"
                min="0"
                max="100"
                value={soundEffectValue}
                className="slider"
                id="soundEffect"
                onChange={(e) => {
                  handleChangeSoundEffect(e.target.value);
                }}
              />
              <div className="value">{soundEffectValue}%</div>
            </div>
          </Col>
        </div>
      </Col>
    </SettingModalWrapper>
  );
};
export default SettingModal;
