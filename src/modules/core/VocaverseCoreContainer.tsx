import { TSettingModal } from '@/components/common/SettingModal/type';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getPublicPath } from '@/utils/basePath';
import { ReactNode, useEffect, useRef, useState } from 'react';
import settingSelectors from './setting/setting-selectors';
import settingActions from './setting/setting-actions';
import { TModalPause } from '@/components/common/V2/ModalPause/type';
import { v4 as uuid } from 'uuid';
export const LandingContainer = ({
  render
}: {
  render: (props: TVocaverseCore) => ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined'
      ? new Audio(getPublicPath('/sound/Upbeat-Dynamic-Music.mp3'))
      : undefined
  );
  const correctSoundPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined'
      ? new Audio(getPublicPath('/sound/Correct-Sound.mp3'))
      : undefined
  );
  const inCorrectSoundPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined'
      ? new Audio(getPublicPath('/sound/Incorrect-Sound.mp3'))
      : undefined
  );
  const [state, setState] = useState<TState>({
    page: 'landing',
    listPage: ['landing']
  });
  const [isModalSettingOpen, setIsModalSettingOpen] = useState<boolean>(false);
  const [key, setKey] = useState<string>(uuid());
  const volume = useAppSelector(settingSelectors.volumeSelector);
  const music = useAppSelector(settingSelectors.musicSelector);
  const soundEffect = useAppSelector(settingSelectors.soundEffectSelector);
  const onSetting = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    setIsModalSettingOpen(true);

    // dispatch(modalActions.onOpen('SettingMenu'));
  };
  const handleResetKey = () => {
    setKey(uuid());
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

  const handlePlaySound = (correctness: boolean) => {
    if (correctSoundPlayers.current && inCorrectSoundPlayers.current) {
      if (correctness) {
        correctSoundPlayers.current.play();
      } else {
        console.log('false');
        inCorrectSoundPlayers.current.play();
      }
    }
  };

  useEffect(() => {
    dispatch(
      settingActions.onChangeVolume(localStorage.getItem('volume') ?? 100)
    );
    dispatch(settingActions.onChangeMusic(localStorage.getItem('music') ?? 75));

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
        localStorage.getItem('soundEffect') ?? 75
      )
    );
  }, []);
  useEffect(() => {
    window.onclick = () => {
      if (musicPlayers.current && musicPlayers.current.paused) {
        musicPlayers.current.loop = true;
        musicPlayers.current.autoplay = true;
        musicPlayers.current.play();
      }
    };
  }, []);

  useEffect(() => {
    if (musicPlayers.current) {
      musicPlayers.current.volume =
        (parseInt(music) / 100) * (parseInt(volume) / 100);
    }
    if (correctSoundPlayers.current) {
      correctSoundPlayers.current.volume =
        (parseInt(soundEffect) / 100) * (parseInt(volume) / 100);
    }
    if (inCorrectSoundPlayers.current) {
      inCorrectSoundPlayers.current.volume =
        (parseInt(soundEffect) / 100) * (parseInt(volume) / 100);
    }
  }, [music, soundEffect, volume]);

  return render({
    state,
    onChangeState,
    onSetting,
    onCloseModalSetting,
    onPlaySoundEffect: handlePlaySound,
    settingModal: {
      isSetting: true,
      masterVolume: volume,
      musicVolume: music,
      sfxVolume: soundEffect
    },
    isModalSettingOpen,
    key,
    resetKey: handleResetKey
    // settingModal: {
    //   charaterPic: getPublicPath(`/character/player/robot.svg`),
    //   musicValue: music,
    //   volumeValue: volume,
    //   soundEffectValue: soundEffect,
    //   onClickChangeButton: () => {}
    // }
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
  onCloseModalSetting: () => void;
  onSetting: () => void;
  onPlaySoundEffect: (correctness: boolean) => void;
  settingModal: TModalPause;
  isModalSettingOpen: boolean;
  key: string;
  resetKey: () => void;
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
