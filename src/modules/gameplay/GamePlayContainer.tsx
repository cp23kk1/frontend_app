import React, { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { v4 as uuid } from 'uuid';
import vocabularySelectors from './vocabulary/vocabulary-selectors';
import { TGamePlayContainer } from './type';
import {
  TGamePlayAnswerButton,
  TKnowLedgeSection
} from '@/components/modules/gameplay/KnowledgeSection/type';
import { IVocabulary } from './vocabulary/vocabulary-services';
import { TAnimationSection } from '@/components/common/AnimationSection/type';
import { dispatch as vocabularyDispatch } from './vocabulary';
import { TAnswerButton } from '@/components/common/AnswerButton/type';
import { TPos } from '@/components/common/QuestionLayout/type';

const GamePlayContainer = ({
  render
}: {
  render: (props: TGamePlayContainer) => ReactNode;
}) => {
  const dispatch = useAppDispatch();

  // vocabulary
  const vocabulary = useAppSelector(vocabularySelectors.vocabularySelector);
  const isLoadingVocabulary = useAppSelector(
    vocabularySelectors.isLoadingVocabularySelector
  );

  // knowledge section
  const [answers, setAnswers] = useState<TGamePlayAnswerButton[]>([
    {
      children: 'asdf',
      state: 'normal'
    }
  ]);
  const [question, setQuestion] = useState<ReactNode>('');
  const [pos, setPos] = useState<TPos | undefined>();
  const [type, setType] = useState<
    'sentence' | 'vocabulary' | 'passage' | undefined
  >('vocabulary');
  const [score, setscore] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [playerHealth, setPlayerHealth] = useState<number>(100);
  const [enemyHealth, setEnemyHealth] = useState<number>(100);

  const _handleChangeScore = (inputscore: number) => {
    setscore(inputscore);
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
          .filter((_, index) => index !== currentIndex)
          .sort(() => 0.5 - Math.random())
          .splice(0, 1)
          .map((value): TGamePlayAnswerButton => {
            return { children: value.meaning, state: 'normal' };
          })
      ];
      _handleChangeAnswers(newAnswer.sort(() => 0.5 - Math.random()));
      _handleChangeQuestion(vocabulary[currentIndex].word);
      _handleChangePos(vocabulary[currentIndex].pos);
      _handleChangeType('vocabulary');
    }
  };
  const _validateAnswer = (meaning: ReactNode) => {
    const correctness = vocabulary[currentIndex].meaning === meaning;
    _handleChangeAnswers(
      answers.map((value, index) => {
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
      _calculateHealth(correctness);
    }, 1000);
  };
  const _calculateHealth = (correctness: boolean) => {
    if (correctness) {
      _handleChangeEnemyHealth(enemyHealth - 10);
      _handleChangeScore(score + 1);
    } else {
      _handleChangePlayerHealth(playerHealth - 10);
    }
  };
  //onmouted
  useEffect(() => {
    dispatch(vocabularyDispatch.getRandomVocabulary());
  }, []);

  useEffect(() => {
    _addQuestion();
  }, [isLoadingVocabulary, currentIndex]);

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
    onChangeScore: _handleChangeScore
  });
};
export default GamePlayContainer;
