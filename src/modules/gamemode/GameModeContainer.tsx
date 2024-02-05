import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';

import { TState } from '../core/VocaverseCoreContainer';
import { TGameModeContainer } from './type';
import { TCard } from '@/components/common/Card/type';
import gamemodeCoreSelectors from './gamemode-core/gamemode-core-selectors';
import { current } from '@reduxjs/toolkit';

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
  let currentModeIndex = 0;
  const handleChangeMode = (modeIndex: number) => {
    currentModeIndex = modeIndex;
  };

  return render({
    bestScore: 999,
    isModalSettingOpen: false,
    listMode: modes,
    onClickSetting: () => {},
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
  });
};
export default GamePlayContainer;
