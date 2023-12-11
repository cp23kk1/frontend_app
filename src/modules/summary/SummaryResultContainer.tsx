import { ReactNode, useEffect } from 'react';
import { useAppSelector } from '@/hooks';

import { TSummaryResultContainer } from './type';
import { selectors as gameplayCoreSelectors } from '../gameplay/gameplay-core';

import { useRouter } from 'next/router';
import { TGameOverFooter } from '@/components/modules/summary/GameOverFooter/type';
import { TSummarySection } from '@/components/modules/summary/SummarySection/type';
import { getPublicPathPageRounting } from '@/utils/basePath';

const SummaryResultContainer = ({
  render
}: {
  render: (props: TSummaryResultContainer) => ReactNode;
}) => {
  const router = useRouter();

  // vocabulary
  // const vocabulary = useAppSelector(vocabularySelectors.vocabularySelector);

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
        lebel: 'Home',
        onClick: () => {
          router.push(getPublicPathPageRounting('/'));
        }
      },
      {
        iconName: 'Retry',
        lebel: 'Retry',
        onClick: () => {
          router.push(getPublicPathPageRounting('/gameplay'));
        }
      },
      {
        iconName: 'Menu',
        lebel: 'Mode',
        onClick: () => {
          console.log(getPublicPathPageRounting('Mode clicked!'));
        }
      }
    ]
  };

  return render({
    mode,
    bestScore,
    currentScore,
    summarySection,
    options
  });
};
export default SummaryResultContainer;
