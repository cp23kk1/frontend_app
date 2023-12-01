import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { v4 as uuid } from 'uuid';
import vocabularySelectors from './vocabulary/vocabulary-selectors';
import { TGamePlayContainer } from './type';
import { TKnowLedgeSection } from '@/components/modules/gameplay/KnowledgeSection/type';
import { IVocabulary } from './vocabulary/vocabulary-services';
import { TQuestion } from './vocabulary/type';
import { TAnimationSection } from '@/components/common/AnimationSection/type';
import { dispatch as vocabularyDispatch } from './vocabulary';
import { TAnswerButton } from '@/components/common/AnswerButton/type';

const GamePlayContainer = ({
  render
}: {
  render: (props: TGamePlayContainer) => ReactNode;
}) => {
  const dispatch = useAppDispatch();
  // knowledge section
  const [knowLedgeSection, setKnowledgeSection] = useState<TKnowLedgeSection>();
  const _handleChangeKnowLedgeSection = (section: TKnowLedgeSection) => {
    setKnowledgeSection(section);
  };
  let questions: TKnowLedgeSection[] = [];
  let currentQuestionIndex: number = 0;

  const _handleChangeQuestions = (questionsInput: TKnowLedgeSection[]) => {
    questions = questionsInput;
  };

  // vocabulary
  const vocabulary = useAppSelector(vocabularySelectors.vocabularySelector);
  const isLoadingVocabulary = useAppSelector(
    vocabularySelectors.isLoadingVocabularySelector
  );
  // animation section
  let playerHealth = 100;
  let enemyHealth = 100;
  const [showScore, setShowScore] = useState<number>(0);
  let score = 0;
  const [animationSection, setAnimationSection] = useState<TAnimationSection>({
    playerHealth: playerHealth,
    enemyHealth: enemyHealth
  });

  //question logic
  const _addQuestion = (vocabulary: IVocabulary[]) => {
    console.log(vocabulary);
    _handleChangeQuestions(
      vocabulary.map((value, vIndex, arr): TQuestion => {
        const answers: TAnswerButton[] = [
          ...arr
            .filter((_, index) => index !== vIndex)
            .sort((a, b) => 0.5 - Math.random())
            .splice(0, 1)
            .map((jValue, index): TAnswerButton => {
              return {
                children: jValue.meaning,
                onClick: () => {
                  _validateAnswer(false, jValue.meaning);
                },
                state: 'normal',
                disabled: false
              };
            }),
          {
            children: value.meaning,
            onClick: () => {
              _validateAnswer(true, value.meaning);
            },
            state: 'normal',
            disabled: false
          }
        ];
        return {
          question: value.word,
          pos: value.pos,
          type: 'vocabulary',
          answers: [...answers].sort((a, b) => 0.5 - Math.random())
        };
      })
    );
    _handleChangeKnowLedgeSection(questions[currentQuestionIndex]);
  };
  const _validateAnswer = (correctness: boolean, meaning: string) => {
    _handleChangeKnowLedgeSection({
      ...questions[currentQuestionIndex],
      answers: questions[currentQuestionIndex].answers.map((value, index) => {
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
    });
    setTimeout(() => {
      currentQuestionIndex++;
      _calculateHealth(correctness);
      _handleChangeKnowLedgeSection(questions[currentQuestionIndex]);
    }, 1000);
  };
  // animation logic
  const _calculateHealth = (correctness: boolean) => {
    if (correctness) {
      enemyHealth -= 10;
      setAnimationSection({
        playerHealth: playerHealth,
        enemyHealth: enemyHealth
      });
      // _handleChangeScore(score);
      score++;
      setShowScore(score);
    } else {
      playerHealth -= 10;
      setAnimationSection({
        enemyHealth: enemyHealth,
        playerHealth: playerHealth
      });
    }
  };
  // useEffect
  useEffect(() => {
    if (!isLoadingVocabulary) {
      _addQuestion(vocabulary);
    }
  }, [isLoadingVocabulary]);
  //onmounted
  useEffect(() => {
    dispatch(vocabularyDispatch.getRandomVocabulary());
  }, []);
  useEffect(() => {
    console.log('currentQuestionIndex', currentQuestionIndex);
    console.log(
      'currentQuestionIndex / questions.length === 2',
      currentQuestionIndex / questions.length === 2
    );
    if (currentQuestionIndex / questions.length === 2) {
      dispatch(vocabularyDispatch.getRandomVocabulary());
    }
  }, [currentQuestionIndex]);
  return render({
    knowLedgeSection,
    currentQuestionIndex,
    animationSection,
    score: showScore
  });
};
export default GamePlayContainer;
