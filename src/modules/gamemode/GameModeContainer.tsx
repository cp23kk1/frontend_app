import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';

import { TState } from '../core/VocaverseCoreContainer';
import { TGameModeContainer } from './type';
import gamemodeCoreSelectors from './gamemode-core/gamemode-core-selectors';
import { selectors as settingSelectors } from '@/modules/core/setting';
import { getPublicPath } from '@/utils/basePath';
import settingActions from '../core/setting/setting-actions';
import userCoreDispatch from '../user/user-core/user-core-dispatch';
import userCoreSelectors from '../user/user-core/user-core-selectors';

const GamePlayContainer = ({
  render,
  onChangeState,
  state
}: {
  render: (props: TGameModeContainer) => ReactNode;
  onChangeState: (input: TState) => void;
  state: TState;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userProfile = useAppSelector(userCoreSelectors.userProfileSelector);

  const modes = useAppSelector(gamemodeCoreSelectors.gameModeSelector);

  let currentModeIndex = 0;

  const handleChangeMode = (modeIndex: number) => {
    currentModeIndex = modeIndex;
  };

  const handleClickPlay = () => {
    onChangeState({
      page: 'gameplay',
      data: { mode: modes[currentModeIndex].modeName }
    });
  };
  useEffect(() => {
    dispatch(userCoreDispatch.getUserProfileDispatch());
  }, []);
  useEffect(() => {
    if (!userProfile) {
      onChangeState({
        page: 'landing',
        data: {}
      });
    }
  }, [userProfile]);

  return render({
    gameModeProps: {
      bestScore: 999,
      listMode: modes,
      onClickSetting: () => {},
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
    }
  });
};
export default GamePlayContainer;
