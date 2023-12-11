import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { TGameHistory } from './type';

const gameplayCoreSelector = (state: RootState) => state.gameplay.gameplayCore;

const currentGameHistorySelector = createSelector(
  gameplayCoreSelector,
  (gamePlay): TGameHistory => {
    return gamePlay.currentGameHistory;
  }
);
export default {
  gameplayCoreSelector,
  currentGameHistorySelector
};
