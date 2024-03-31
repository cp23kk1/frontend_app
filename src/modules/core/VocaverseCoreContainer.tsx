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
  const [state, setState] = useState<TState>({
    page: 'landing',
    listPage: ['landing']
  });
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
    console.log(state);
    setState({
      ...inputState,
      listPage: state.listPage?.concat(inputState.page)
    });
  };

  useEffect(() => {
    dispatch(
      settingActions.onChangeVolume(localStorage.getItem('volume') ?? 0)
    );
    dispatch(settingActions.onChangeMusic(localStorage.getItem('music') ?? 0));

    onChangeState(
      localStorage.getItem('currentState')
        ? JSON.parse(
            localStorage.getItem('currentState') ??
              JSON.stringify({
                page: 'landing'
              })
          )
        : {
            page: 'landing'
          }
    );

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
      musicValue: music,
      volumeValue: volume,
      soundEffectValue: soundEffect,
      onClickChangeButton: () => {}
    }
  });
};

export type TState = {
  page: TPagelist;
  listPage?: TPagelist[];
  data?: any;
};
export type TVocaverseCore = {
  state: TState;
  onChangeState: (input: TState) => void;
  onSetting: () => void;
  settingModal: TSettingModal;
};
type TPagelist =
  | 'landing'
  | 'gameplay'
  | 'summary'
  | 'gamemode'
  | 'host-lobby'
  | 'user-profile'
  | 'lobby'
  | 'multiplay-gameplay'
  | 'multiplayer-result';
export default LandingContainer;
