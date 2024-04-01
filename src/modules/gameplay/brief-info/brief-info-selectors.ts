import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { IWord } from './type';

const gameplayBriefInfoSelector = (state: RootState) =>
  state.gameplay.briefInfo;

const briefInfoSelector = createSelector(
  gameplayBriefInfoSelector,
  (briefInfo): IWord | undefined => {
    return briefInfo.briefInfo;
  }
);

const isBriefInfosLoadingSelector = createSelector(
  gameplayBriefInfoSelector,
  (briefInfo) => {
    return briefInfo.isBriefInfoLoading;
  }
);

export default {
  gameplayBriefInfoSelector,
  briefInfoSelector,
  isBriefInfosLoadingSelector
};
