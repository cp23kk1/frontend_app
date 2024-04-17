import { useAppDispatch } from '@/hooks';
import Icon from '../../Icon';
import NewButton from '../NewButton';
import { ModalPauseWrapper } from './style';
import { TModalPause } from './type';
import settingActions from '@/modules/core/setting/setting-actions';

const ModalPause = ({
  masterVolume,
  sfxVolume,
  musicVolume,
  isSetting,
  isMultiplayer,
  onClickTutorial,
  onClickRetry,
  onClickResume,
  onClickFinish
}: TModalPause) => {
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
    <ModalPauseWrapper>
      <div className="topic">{isSetting ? 'SETTINGS' : 'PAUSED'}</div>
      <div className="main">
        <div className="header">SOUNDS</div>
        <div className="content">
          <div className="master">
            <div className="master-head">Master volume</div>
            <div className="panel">
              <div className="setting-panel">
                <div className="input">
                  <Icon iconName="Speaker" size={24} color="#393d73" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="slider"
                    id="volume"
                    value={masterVolume}
                    onChange={(e) => {
                      handleChangeVolume(e.target.value);
                    }}
                  />
                  <div className="value">{masterVolume}%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sfx">
            Sound effects
            <div className="panel">
              <div className="setting-panel">
                <div className="input">
                  <Icon iconName="Speaker" size={24} color="#393d73" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="slider"
                    id="volume"
                    value={sfxVolume}
                    onChange={(e) => {
                      handleChangeSoundEffect(e.target.value);
                    }}
                  />
                  <div className="value">{sfxVolume}%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="music">
            Background music
            <div className="panel">
              <div className="setting-panel">
                <div className="input">
                  <Icon iconName="Speaker" size={24} color="#393d73" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="slider"
                    id="volume"
                    value={musicVolume}
                    onChange={(e) => {
                      handleChangeMusic(e.target.value);
                    }}
                  />
                  <div className="value">{musicVolume}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttom-button">
        {isSetting ? (
          <div className="tutorial" onClick={onClickTutorial}>
            TUTORIALS
          </div>
        ) : (
          <div className="button">
            <NewButton
              style={{ width: 'fit-content' }}
              label="RETRY"
              disable={isMultiplayer}
              iconName="Retry"
              onClick={onClickRetry}
            />
            <NewButton
              style={{ width: 'fit-content' }}
              label="RESUME"
              iconName="Play"
              onClick={onClickResume}
            />
            <NewButton
              style={{ width: 'fit-content' }}
              label={isMultiplayer ? 'LEAVE' : 'FINISH'}
              iconName="Leave"
              onClick={onClickFinish}
            />
          </div>
        )}
      </div>
    </ModalPauseWrapper>
  );
};

export default ModalPause;
