import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

const gamePlayGameResult = (state: RootState) => state.gameplay.gameResult;

const isCreateGameResultLoadingSelector = createSelector(
  gamePlayGameResult,
  (gameResult) => {
    return gameResult.isCreateGameResultLoading;
  }
);
export default {
  gamePlayGameResult,
  isCreateGameResultLoadingSelector
};
