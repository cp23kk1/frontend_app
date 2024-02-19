import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { IBestScoreBoard, IWeeklyScoreBoard } from './score-services';

const scoreSelector = (state: RootState) => state.score;

const scoreBoardSelector = createSelector(
  scoreSelector,
  (score): IWeeklyScoreBoard[] => {
    return score.scoreBoard ?? [];
  }
);
const isLoadingScoreBoardSelector = createSelector(scoreSelector, (score) => {
  return score.isScoreBoardLoading;
});

const bestScoreSelector = createSelector(scoreSelector, (score) => {
  return score.bestScore;
});
const isLoadingBestScoreSelector = createSelector(scoreSelector, (score) => {
  return score.isScoreBoardLoading;
});

export default {
  scoreSelector,
  scoreBoardSelector,
  bestScoreSelector,
  isLoadingScoreBoardSelector,
  isLoadingBestScoreSelector
};
