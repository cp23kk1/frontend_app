import { ReactNode, useEffect } from 'react';
import { useAppSelector } from '@/hooks';

import { TSummaryResultContainer } from './type';
import { selectors as vocabularySelectors } from '../gameplay/vocabulary';
import { selectors as gameplayCoreSelectors } from '../gameplay/gameplay-core';

import { useRouter } from 'next/router';
import { TGameOverFooter } from '@/components/modules/summary/GameOverFooter/type';
import { TSummarySection } from '@/components/modules/summary/SummarySection/type';
import { getPublicPathPageRounting } from '@/utils/basePath';
import { TState } from '../core/VocaverseCoreContainer';

const SummaryResultContainer = ({
  render,
  onChangeState
}: {
  render: (props: TSummaryResultContainer) => ReactNode;
  onChangeState: (input: TState) => void;
}) => {
  const router = useRouter();

  // vocabulary
  // const vocabulary = useAppSelector(vocabularySelectors.vocabularySelector);

  const vocabulary = useAppSelector(
    gameplayCoreSelectors.currentGameHistorySelector
  )?.vocabs;

  // header
  const gameHistory = useAppSelector(
    gameplayCoreSelectors.currentGameHistorySelector
  );

  const mode: string = 'Single Player';
  // const bestScore: number = gameHistory?.current_score ?? 0;
  // const currentScore: number = gameHistory?.current_score ?? 0;
  const bestScore: number = 999 ?? 0;
  const currentScore: number = gameHistory.current_score;

  // table
  const summarySection: TSummarySection = {
    //TODO: hard code, need improve later
    tabs: [{ childen: 'Vocabulary', isSelected: true, onClick: () => {} }],
    table: {
      columns: ['No.', 'Question', 'Answer'],
      data: vocabulary.map((item) => {
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
          onChangeState('landing')
      },
      {
        iconName: 'Retry',
        label: 'Retry',
        onClick: () =>
          // router.push(getPublicPathPageRounting('/gameplay'))
          onChangeState('gameplay')
      },
      {
        iconName: 'Menu',
        label: 'Mode',
        onClick: () => console.log(getPublicPathPageRounting('Mode clicked!'))
      }
    ]
  };

  useEffect(() => {
    let bool =
      gameHistory.current_score === 0 && gameHistory.vocabs.length === 0;
    if (bool) {
      router.push(getPublicPathPageRounting('/'));
    }
  }, []);

  return render({
    mode,
    bestScore,
    currentScore,
    summarySection,
    options
  });
};
export default SummaryResultContainer;
