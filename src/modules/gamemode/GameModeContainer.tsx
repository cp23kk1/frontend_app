import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';

import { TState } from '../core/VocaverseCoreContainer';
import { TGameModeContainer } from './type';
import gamemodeCoreSelectors from './gamemode-core/gamemode-core-selectors';
import { selectors as settingSelectors } from '@/modules/core/setting';
import { getPublicPath } from '@/utils/basePath';
import settingActions from '../core/setting/setting-actions';

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

  const handleClickPlay = () => {
    onChangeState({
      page: 'gameplay',
      data: { mode: modes[currentModeIndex].modeName }
    });
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
    }
  });
};
export default GamePlayContainer;
