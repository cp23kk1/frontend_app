import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { TGamePlayContainer } from './type';
import {
  TGamePlayAnswerButton,
  TKnowLedgeSection
} from '@/components/modules/gameplay/KnowledgeSection/type';
import { TAnimationSection } from '@/components/common/AnimationSection/type';
import {
  dispatch as vocabularyDispatch,
  selectors as vocabularySelectors
} from './vocabulary';
import {
  selectors as gameplayCoreSelectors,
  actions as gameplayCoreActions
} from './gameplay-core';

import { TPos } from '@/components/common/QuestionLayout/type';
import { useRouter } from 'next/router';
import { getPublicPathPageRounting } from '@/utils/basePath';
import { TState } from '../core/VocaverseCoreContainer';
import { current } from '@reduxjs/toolkit';

const GamePlayContainer = ({
  render,
  onChangeState,
  state
}: {
  render: (props: TGamePlayContainer) => ReactNode;
  onChangeState: (input: TState) => void;
  state: TState;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // vocabulary
  const vocabulary = useAppSelector(vocabularySelectors.vocabularySelector);
  const isLoadingVocabulary = useAppSelector(
    vocabularySelectors.isLoadingVocabularySelector
  );
  const currentGameHistory = useAppSelector(
    gameplayCoreSelectors.currentGameHistorySelector
  );

  // knowledge section
  const [answers, setAnswers] = useState<TGamePlayAnswerButton[]>([]);
  const [question, setQuestion] = useState<ReactNode>('');
  const [pos, setPos] = useState<TPos | undefined>();
  const [type, setType] = useState<
    'sentence' | 'vocabulary' | 'passage' | undefined
  >('vocabulary');
  const [score, setScore] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [playerHealth, setPlayerHealth] = useState<number>(100);
  const [enemyHealth, setEnemyHealth] = useState<number>(100);

  const _handleChangeScore = (inputscore: number) => {
    setScore(inputscore);
  };
  const _handleChangeCurrentIndex = (inputCurrentIndex: number) => {
    setCurrentIndex(inputCurrentIndex);
  };
  const _handleChangePlayerHealth = (inputPlayerHealth: number) => {
    setPlayerHealth(inputPlayerHealth);
  };
  const _handleChangeEnemyHealth = (inputEnemyHealth: number) => {
    setEnemyHealth(inputEnemyHealth);
  };
  const _handleChangeAnswers = (inputAnswers: TGamePlayAnswerButton[]) => {
    setAnswers(inputAnswers);
  };
  const _handleChangeQuestion = (inputQuestions: ReactNode) => {
    setQuestion(inputQuestions);
  };
  const _handleChangePos = (inputPos: TPos | undefined) => {
    setPos(inputPos);
  };
  const _handleChangeType = (
    inputType: 'sentence' | 'vocabulary' | 'passage' | undefined
  ) => {
    setType(inputType);
  };

  //question logic
  const _addQuestion = () => {
    if (vocabulary[currentIndex]) {
      const newAnswer: TGamePlayAnswerButton[] = [
        { children: vocabulary[currentIndex].meaning, state: 'normal' },
        ...vocabulary
          .filter((_, index: number) => index !== currentIndex)
          .sort(() => 0.5 - Math.random())
          // number of answer
          .splice(0, 1)
          .map((value): TGamePlayAnswerButton => {
            return { children: value.meaning, state: 'normal' };
          })
      ];
      _handleChangeAnswers(newAnswer.toSorted(() => 0.5 - Math.random()));
      _handleChangeQuestion(vocabulary[currentIndex].word);
      _handleChangePos(vocabulary[currentIndex].pos);
      _handleChangeType('vocabulary');
    }
  };
  const _validateAnswer = (meaning: string) => {
    const correctness = vocabulary[currentIndex].meaning === meaning;
    _handleChangeAnswers(
      answers.map((value) => {
        return correctness
          ? {
              ...value,
              disabled: true,
              state: value.children === meaning ? 'correct' : 'normal'
            }
          : {
              ...value,
              disabled: true,
              state: value.children === meaning ? 'incorrect' : 'normal'
            };
      })
    );
    setTimeout(() => {
      _handleChangeCurrentIndex(currentIndex + 1);
      _calculateHealth(correctness, meaning);
    }, 1000);
  };
  const _calculateHealth = (correctness: boolean, meaning: string) => {
    if (correctness) {
      _handleChangeEnemyHealth(enemyHealth - 10);
      _handleChangeScore(score + 1);
    } else {
      _handleChangePlayerHealth(playerHealth - 10);
    }
    updateGameHistory(correctness, meaning);
    if (currentGameHistory.vocabs.length > vocabulary.length / 2) {
      dispatch(vocabularyDispatch.getRandomVocabularyDispatch());
    }
  };
  const updateGameHistory = (correctness: boolean, meaning: string) => {
    dispatch(
      gameplayCoreActions.changeGameHistory({
        gameId: currentGameHistory?.gameId,
        current_score: correctness ? score + 1 : score,
        vocabs: currentGameHistory?.vocabs.concat({
          vocabularyId: vocabulary[currentIndex].id,
          answer: meaning,
          question: vocabulary[currentIndex].word,
          correctness: correctness
        }),
        sentences: [],
        passages: []
      })
    );
  };
  const onPause = () => {
    // dispatch(modalActions.onOpen('PauseMenu'));
  };

  //useEffect
  useEffect(() => {
    dispatch(vocabularyDispatch.getRandomVocabularyDispatch());
  }, []);

  useEffect(() => {
    _addQuestion();
  }, [isLoadingVocabulary, currentIndex]);

  useEffect(() => {
    if (playerHealth === 0) {
      // dispatch(modalActions.onOpen('GAMEOVER'));

      setTimeout(() => {
        // dispatch(modalActions.onClose());
        // router.push(getPublicPathPageRounting('/summary'));
        onChangeState({ ...state, page: 'summary' });
      }, 1000);
    }
    if (enemyHealth === 0) {
      _handleChangeEnemyHealth(100);
    }
  }, [playerHealth, enemyHealth]);

  const knowLedgeSection: TKnowLedgeSection = {
    answers: answers ?? [],
    question: question ?? '',
    pos: pos ?? '',
    type,
    onAnswer: _validateAnswer
  };
  const animationSection: TAnimationSection = {
    enemyHealth: enemyHealth,
    playerHealth: playerHealth
  };
  return render({
    knowLedgeSection,
    animationSection,
    score,
    onPause,
    onChangeScore: _handleChangeScore
  });
};
export default GamePlayContainer;
