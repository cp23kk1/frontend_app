import { TSettingModal } from '@/components/common/SettingModal/type';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getPublicPath } from '@/utils/basePath';
import { ReactNode, useEffect, useState } from 'react';
import settingSelectors from './setting/setting-selectors';
import settingActions from './setting/setting-actions';

export const LandingContainer = ({
  render
}: {
  render: (props: TVocaverseCore) => ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<TState>({ page: 'landing' });
  const [isModalSettingOpen, setIsModalSettingOpen] = useState<boolean>(false);
  const volume = useAppSelector(settingSelectors.volumeSelector);
  const music = useAppSelector(settingSelectors.musicSelector);
  const soundEffect = useAppSelector(settingSelectors.soundEffectSelector);
  const onSetting = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    setIsModalSettingOpen(true);
    // dispatch(modalActions.onOpen('SettingMenu'));
  };

  const onCloseModalSetting = () => {
    setIsModalSettingOpen(false);
  };
  const onChangeState = (inputState: TState) => {
    setState(inputState);
  };
  useEffect(() => {
    dispatch(
      settingActions.onChangeVolume(localStorage.getItem('volume') ?? 0)
    );
    dispatch(settingActions.onChangeMusic(localStorage.getItem('music') ?? 0));
    dispatch(
      settingActions.onChangeSoundEffect(
        localStorage.getItem('soundEffect') ?? 0
      )
    );
  }, []);

  return render({
    state,
    onChangeState,
    onSetting,
    settingModal: {
      charaterPic: getPublicPath(`/character/player/robot.svg`),
      isModalOpen: isModalSettingOpen,
      onClose: onCloseModalSetting,
      musicValue: music,
      volumeValue: volume,
      soundEffectValue: soundEffect,
      onClickChangeButton: () => {}
    }
  });
};

export type TState = {
  page: 'landing' | 'gameplay' | 'summary' | 'gamemode';
  data?: any;
};
export type TVocaverseCore = {
  state: TState;
  onChangeState: (input: TState) => void;
  onSetting: () => void;
  settingModal: TSettingModal;
};
export default LandingContainer;
