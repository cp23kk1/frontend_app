import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { IWeeklyScoreBoard } from './score-services';

const scoreSelector = (state: RootState) => state.score;

const scoreBoardSelector = createSelector(
  scoreSelector,
  (score): IWeeklyScoreBoard[] => {
    return score.scoreBoard;
  }
);
const isLoadingScoreBoardSelector = createSelector(scoreSelector, (score) => {
  return score.isScoreBoardLoading;
});

export default {
  scoreSelector,
  scoreBoardSelector,
  isLoadingScoreBoardSelector
};
