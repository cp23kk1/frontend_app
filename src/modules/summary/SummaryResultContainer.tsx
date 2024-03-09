import { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { TSummaryResultContainer } from './type';
import { selectors as vocabularySelectors } from '../gameplay/question';
import { selectors as gameplayCoreSelectors } from '../gameplay/gameplay-core';

import { useRouter } from 'next/router';
import { TGameOverFooter } from '@/components/modules/summary/GameOverFooter/type';
import { TSummarySection } from '@/components/modules/summary/SummarySection/type';
import { getPublicPathPageRounting } from '@/utils/basePath';
import { TState } from '../core/VocaverseCoreContainer';
import gameplayCoreActions from '../gameplay/gameplay-core/gameplay-core-actions';
import gameResultDispatch from '../gameplay/game-result/game-result-dispatch';
import vocabularyActions from '../gameplay/question/question-actions';
import scoreDispatch from '../score/score-dispatch';
import scoreSelectors from '../score/score-selectors';

const SummaryResultContainer = ({
  render,
  onChangeState,
  state
}: {
  render: (props: TSummaryResultContainer) => ReactNode;
  onChangeState: (input: TState) => void;
  state: TState;
}) => {
  // vocabulary
  // const vocabulary = useAppSelector(vocabularySelectors.vocabularySelector);
  const dispatch = useAppDispatch();

  const bestScore = useAppSelector(scoreSelectors.bestScoreSelector);

  // header
  const gameHistory = useAppSelector(
    gameplayCoreSelectors.currentGameHistorySelector
  );

  const mode: string = state.data.mode;

  // table
  const summarySection: TSummarySection = {
    //TODO: hard code, need improve later
    tabs: [{ childen: 'Vocabulary', isSelected: true, onClick: () => {} }],
    table: {
      columns: ['No.', 'Question', 'Answer'],
      data: gameHistory.vocabs.map((item) => {
        return {
          id: item.vocabularyId,
          word: item.question,
          meaning: item.answer
        };
      }),
      onClick: () => {},
      moreinfo: {
        label: 'More info',
        isShow: true
      }
    }
  };

  // footer
  const options: TGameOverFooter = {
    options: [
      {
        iconName: 'Home',
        label: 'Home',
        onClick: () =>
          // router.push(getPublicPathPageRounting('/'))
          onChangeState({ page: 'landing' })
      },
      {
        iconName: 'Retry',
        label: 'Retry',
        onClick: () => {
          dispatch(gameplayCoreActions.clear());
          onChangeState({ ...state, page: 'gameplay' });
        }
      },
      {
        iconName: 'Menu',
        label: 'Mode',
        onClick: () => onChangeState({ page: 'gamemode' })
      }
    ]
  };

  useEffect(() => {
    dispatch(
      gameResultDispatch.createGameResultDispatch({
        current_score: gameHistory.current_score,
        gameID: gameHistory.gameId,
        vocabs: gameHistory.vocabs,
        passages: gameHistory.passages,
        sentences: gameHistory.sentences
      })
    );
    dispatch(scoreDispatch.getBestScoreDispatch());
    dispatch(vocabularyActions.clear());
  }, []);

  return render({
    mode,
    bestScore: bestScore,
    currentScore: gameHistory.current_score,
    summarySection,
    options
  });
};
export default SummaryResultContainer;
