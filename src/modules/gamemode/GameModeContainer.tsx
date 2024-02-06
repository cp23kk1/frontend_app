import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';

import { TState } from '../core/VocaverseCoreContainer';
import { TGameModeContainer } from './type';
import gamemodeCoreSelectors from './gamemode-core/gamemode-core-selectors';
import {
  selectors as settingSelectors,
  actions as settingActions
} from '@/modules/core/setting';
import { getPublicPath } from '@/utils/basePath';

const GamePlayContainer = ({
  render,
  onChangeState
}: {
  render: (props: TGameModeContainer) => ReactNode;
  onChangeState: (input: TState) => void;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const modes = useAppSelector(gamemodeCoreSelectors.gameModeSelector);
  const volume = useAppSelector(settingSelectors.volumeSelector);
  const music = useAppSelector(settingSelectors.musicSelector);
  const soundEffect = useAppSelector(settingSelectors.soundEffectSelector);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  let currentModeIndex = 0;

  const handleChangeMode = (modeIndex: number) => {
    currentModeIndex = modeIndex;
  };
  const handleClickSetting = () => {
    setIsModalOpen(true);
  };
  const handleCloseSetting = () => {
    setIsModalOpen(false);
  };
  const handleChangeVolume = (value: string) => {
    dispatch(settingActions.onChangeVolume(value));
  };
  const handleChangeMusic = (value: string) => {
    dispatch(settingActions.onChangeMusic(value));
  };
  const handleChangeSoundEffect = (value: string) => {
    dispatch(settingActions.onChangeSoundEffect(value));
  };
  const handleClickPlay = () => {
    onChangeState({ state: 'gameplay' });
  };

  return render({
    gameModeProps: {
      bestScore: 999,
      listMode: modes,
      onClickSetting: handleClickSetting,
      onSelectMode: handleChangeMode,
      onClickPlay: handleClickPlay,
      profileTab: {
        onClick: () => {},
        profilePic:
          'https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-mediumSquareAt3X-v5.jpg',
        userName: 'j'
      },
      scoreBoard: {
        listScore: [
          { no: 2, score: 999, userName: 'j' },
          { no: 2, score: 999, userName: 'j' },
          { no: 2, score: 999, userName: 'j' },
          { no: 2, score: 999, userName: 'j' }
        ],
        userScore: { no: 2, score: 999, userName: 'j' }
      }
    },
    settingModalProps: {
      charaterPic: getPublicPath(`/character/player/robot.svg`),
      isModalOpen: isModalOpen,
      onClose: handleCloseSetting,
      onMusicChange: handleChangeMusic,
      onSoundEffectChange: handleChangeSoundEffect,
      onVolumechange: handleChangeVolume,
      musicValue: music,
      volumeValue: volume,
      soundEffectValue: soundEffect,
      onClickChangeButton: () => {}
    }
  });
};
export default GamePlayContainer;
