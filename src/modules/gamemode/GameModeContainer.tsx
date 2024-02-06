import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';

import { TState } from '../core/VocaverseCoreContainer';
import { TGameModeContainer } from './type';
import { TCard } from '@/components/common/Card/type';
import gamemodeCoreSelectors from './gamemode-core/gamemode-core-selectors';
import { current } from '@reduxjs/toolkit';
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
  const [volume, setVolume] = useState<string>('50');
  const [music, setMusic] = useState<string>('50');
  const [soundEffect, setSoundEffect] = useState<string>('50');

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  let currentModeIndex = 0;

  const handleChangeMode = (modeIndex: number) => {
    currentModeIndex = modeIndex;
  };
  const handleClickSetting = () => {
    setIsModalOpen(true);
    console.log('object');
  };
  const handleCloseSetting = () => {
    setIsModalOpen(false);
  };
  const handleChangeVolume = (value: string) => {
    setVolume(value);
  };
  const handleChangeMusic = (value: string) => {
    setMusic(value);
  };
  const handleChangeSoundEffect = (value: string) => {
    setSoundEffect(value);
  };

  return render({
    gameModeProps: {
      bestScore: 999,
      listMode: modes,
      onClickSetting: handleClickSetting,
      onSelectMode: handleChangeMode,
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
