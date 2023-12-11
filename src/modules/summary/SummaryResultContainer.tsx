import { ReactNode } from 'react';
import { useAppSelector } from '@/hooks';

import { TSummaryResultContainer } from './type';
import { selectors as vocabularySelectors } from '../gameplay/vocabulary';
import { selectors as gameplayCoreSelectors } from '../gameplay/gameplay-core';

import { useRouter } from 'next/router';
import { TGameOverFooter } from '@/components/modules/summary/GameOverFooter/type';
import { TSummarySection } from '@/components/modules/summary/SummarySection/type';

const SummaryResultContainer = ({
  render
}: {
  render: (props: TSummaryResultContainer) => ReactNode;
}) => {
  const router = useRouter();

  // vocabulary
  const vocabulary = useAppSelector(vocabularySelectors.vocabularySelector);

  // header
  const gameHistory = useAppSelector(
    gameplayCoreSelectors.currentGameHistorySelector
  );

  const mode: string = 'Single Player';
  // const bestScore: number = gameHistory?.current_score ?? 0;
  // const currentScore: number = gameHistory?.current_score ?? 0;
  const bestScore: number = 28 ?? 0;
  const currentScore: number = 42 ?? 0;

  // table
  const summarySection: TSummarySection = {
    //TODO: hard code, need improve later
    tabs: [{ childen: 'Vocabulary', isSelected: true, onClick: () => {} }],
    table: {
      columns: ['No.', 'Question', 'Answer'],
      data: vocabulary.map((item) => {
        return { id: item.id, word: item.word, meaning: item.meaning };
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
        onClick: () => router.push('/')
      },
      {
        iconName: 'Retry',
        lebel: 'Retry',
        onClick: () => router.push('/gameplay')
      },
      {
        iconName: 'Menu',
        lebel: 'Mode',
        onClick: () => console.log('Mode clicked!')
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
