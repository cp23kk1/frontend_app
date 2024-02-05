import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { TGameHistory } from './type';
import { TCard } from '@/components/common/Card/type';
import { getPublicPath } from '@/utils/basePath';

const gameplayCoreSelector = (state: RootState) => state.gameplay.gameplayCore;

//mock gameMode
const gameModeSelector = createSelector(
  gameplayCoreSelector,
  (gamePlay): TCard[] => {
    return [
      {
        modeName: 'Single Player',
        modeSubtitle: 'Single play mode.',
        modeIcon: getPublicPath('/decorations/PlanetsGameMode1.svg'),
        onClick: () => {}
      },
      {
        modeSubtitle: 'Multi play mode.',
        modeName: 'Multi Player',
        modeIcon: getPublicPath('/decorations/PlanetsGameMode1.svg'),
        onClick: () => {}
      },
      { modeName: 'Comming Soon', onClick: () => {} },
      { modeName: 'Comming Soon', onClick: () => {} },
      { modeName: 'Comming Soon', onClick: () => {} },
      { modeName: 'Comming Soon', onClick: () => {} }
    ];
  }
);
export default {
  gameModeSelector
};
