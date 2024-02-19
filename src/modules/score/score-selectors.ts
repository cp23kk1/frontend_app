import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { IBestScoreBoard, IWeeklyScoreBoard } from './score-services';
import { TScoreBoardRow } from '@/components/common/ScoreBoard/type';

const scoreSelector = (state: RootState) => state.score;

const scoreBoardSelector = createSelector(
  scoreSelector,
  (score): TScoreBoardRow[] => {
    return score.scoreBoard.map((score, index): TScoreBoardRow => {
      return {
        no: index + 1,
        score: score.score,
        userName: score.displayName
      };
    });
  }
);
const userScoreBoardSelector = createSelector(
  scoreSelector,
  (score): TScoreBoardRow => {
    return {
      no: score.scoreBoard.includes(
        score.userScoreBoard || ({} as IWeeklyScoreBoard)
      )
        ? score.scoreBoard.findIndex(
            (value) => value.scoreId === score.userScoreBoard?.scoreId
          ) + 1
        : '-',
      score: score.userScoreBoard ? score.userScoreBoard.score : '-',
      userName: score.userScoreBoard ? score.userScoreBoard.displayName : '-'
    };
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
  userScoreBoardSelector,
  isLoadingScoreBoardSelector,
  isLoadingBestScoreSelector
};
