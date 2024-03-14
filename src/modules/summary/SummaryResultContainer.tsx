import { ReactNode, useEffect, useState } from 'react';
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
import { TTab } from '@/components/modules/summary/Tab/type';
import questionActions from '../gameplay/question/question-actions';

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
  const [currentTab, setCurrentTab] = useState<
    'Vocabulary' | 'Sentence' | 'Passage'
  >('Vocabulary');

  const onSelectTab = (inputTab: 'Vocabulary' | 'Sentence' | 'Passage') => {
    setCurrentTab(inputTab);
  };
  const tabs: TTab[] = [
    {
      children: 'Vocabulary',
      isSelected: currentTab === 'Vocabulary',
      onClick: onSelectTab
    },
    {
      children: 'Sentence',
      isSelected: currentTab === 'Sentence',
      onClick: onSelectTab
    },
    {
      children: 'Passage',
      isSelected: currentTab === 'Passage',
      onClick: onSelectTab
    }
  ];

  // table
  const summarySection: TSummarySection = {
    //TODO: hard code, need improve later
    tabs: tabs.filter((tab) => {
      let vocabBool = gameHistory.vocabs.length > 0;
      let sentenceBool = gameHistory.sentences.length > 0;
      let passageBool = gameHistory.passages.length > 0;
      return tab.children === 'Vocabulary'
        ? vocabBool
        : tab.children === 'Sentence'
        ? sentenceBool
        : passageBool;
    }),
    table: {
      columns: ['No.'].concat(
        currentTab === 'Vocabulary'
          ? ['Word', 'Meaning']
          : currentTab === 'Sentence'
          ? ['Question', 'Answer']
          : ['PassageId', 'SentenceQuestion', 'Answer']
      ),
      data:
        currentTab === 'Vocabulary'
          ? gameHistory.vocabs.map((item) => {
              return {
                word: item.question,
                meaning: item.answer
              };
            })
          : currentTab === 'Sentence'
          ? gameHistory.sentences.map((item) => {
              return {
                word: item.question,
                meaning: item.answer
              };
            })
          : gameHistory.passages.map((item, index, arr) => {
              return {
                id:
                  index > 0
                    ? arr[index - 1].passageId === item.passageId
                      ? ''
                      : item.passageId
                    : item.passageId,
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
    dispatch(questionActions.clear());
  }, []);

  return render({
    mode,
    bestScore:
      gameHistory.current_score > bestScore
        ? gameHistory.current_score
        : bestScore,
    currentScore: gameHistory.current_score,
    summarySection,
    options
  });
};
export default SummaryResultContainer;
