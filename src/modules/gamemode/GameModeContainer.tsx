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
import user from '../user';
import scoreDispatch from '../score/score-dispatch';
import scoreSelectors from '../score/score-selectors';
import authDispatch from '../user/auth/auth-dispatch';

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
  const isUserProfileLoading = useAppSelector(
    userCoreSelectors.isUserProfileLoadingSelector
  );
  const scoreBoard = useAppSelector(scoreSelectors.scoreBoardSelector);
  const bestScore = useAppSelector(scoreSelectors.bestScoreSelector);

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

  const onClickLogout = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    dispatch(authDispatch.logoutDispatch());
  };

  const onClickProfile = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
  };

  useEffect(() => {
    dispatch(scoreDispatch.getLeaderBoardDispatch());
    dispatch(scoreDispatch.getBestScoreDispatch());
    if (!userProfile) {
      onChangeState({
        page: 'landing',
        data: {}
      });
    }
  }, [isUserProfileLoading]);

  return render({
    gameModeProps: {
      bestScore: bestScore,
      listMode: modes,
      onClickSetting: () => {},
      onSelectMode: handleChangeMode,
      onClickPlay: handleClickPlay,
      profileTab: {
        profilePic: userProfile?.image,
        userName: userProfile?.displayName,
        onClickLogout,
        onClickProfile
      },
      scoreBoard: {
        listScore: scoreBoard.map((score, index) => {
          return {
            no: index + 1,
            score: score.score,
            userName: score.displayName
          };
        }),
        userScore: { no: 2, score: 999, userName: 'j' }
      }
    }
  });
};
export default GamePlayContainer;
