import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { TGamePlayContainer } from './type';
import {
  IGameplayPassageAnswered,
  TGamePlayAnswerButton,
  TKnowLedgeSection
} from '@/components/modules/gameplay/KnowledgeSection/type';
import { TAnimationSection } from '@/components/common/AnimationSection/type';
import {
  dispatch as vocabularyDispatch,
  selectors as vocabularySelectors
} from './question';
import {
  selectors as gameplayCoreSelectors,
  actions as gameplayCoreActions
} from './gameplay-core';

import { useRouter } from 'next/router';
import { TState } from '../core/VocaverseCoreContainer';
import { getPublicPathPageRounting } from '@/utils/basePath';
import { DragEndEvent } from '@dnd-kit/core';

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
  const questions = useAppSelector(vocabularySelectors.questionsSeletor);
  const isLoadingVocabulary = useAppSelector(
    vocabularySelectors.isLoadingVocabularySelector
  );
  const isLoadingQuestion = useAppSelector(
    vocabularySelectors.isQuestionsLoadingSelector
  );
  const currentGameHistory = useAppSelector(
    gameplayCoreSelectors.currentGameHistorySelector
  );

  // knowledge section
  const [answers, setAnswers] = useState<TGamePlayAnswerButton[]>([]);
  const [passageAnswers, setPassageAnswers] = useState<{
    [key: string]: {
      state: 'normal' | 'correct' | 'incorrect';
      children: string;
    };
  }>({});
  const [question, setQuestion] = useState<ReactNode>('');
  const [pos, setPos] = useState<string | undefined>();
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
  const _handleChangePassageAnswers = (inputAnswers: {
    [key: string]: {
      state: 'normal' | 'correct' | 'incorrect';
      children: string;
    };
  }) => {
    setPassageAnswers(inputAnswers);
  };
  const _handleChangeQuestion = (inputQuestions: ReactNode) => {
    setQuestion(inputQuestions);
  };
  const _handleChangePos = (inputPos: string | undefined) => {
    setPos(inputPos);
  };
  const _handleChangeType = (
    inputType: 'sentence' | 'vocabulary' | 'passage' | undefined
  ) => {
    setType(inputType);
  };

  //question logic
  const _addQuestion = () => {
    const currQuestion = questions[currentIndex];
    console.log('add question: ', questions[currentIndex]);
    if (currQuestion && currQuestion.questionsType !== 'passage') {
      const newAnswer: TGamePlayAnswerButton[] = currQuestion.answers.map(
        (value) => {
          return {
            children: value.answer,
            state: 'normal',
            correctness: value.correctness
          };
        }
      );
      _handleChangeAnswers(newAnswer.toSorted(() => 0.5 - Math.random()));
      _handleChangeQuestion(currQuestion.question);
      _handleChangePos(currQuestion.pos);
      _handleChangeType(currQuestion.questionsType);
    } else if (currQuestion && currQuestion.questions) {
      let newAnswer: TGamePlayAnswerButton[] = [];
      currQuestion.questions.forEach((question) => {
        newAnswer = newAnswer.concat(
          question.answers.map((value) => {
            return {
              children: value.answer,
              state: 'normal',
              correctness: value.correctness
            };
          })
        );
      });
      if (currQuestion.questions.length === 0) {
        return;
      }
      _handleChangeAnswers(newAnswer.toSorted(() => 0.5 - Math.random()));

      _handleChangeType(currQuestion.questionsType);
    }
  };
  const _validateAnswer = (answer: string, correctness: boolean) => {
    _handleChangeAnswers(
      answers.map((value) => {
        return correctness
          ? {
              ...value,
              disabled: true,
              state: value.children === answer ? 'correct' : 'normal'
            }
          : {
              ...value,
              disabled: true,
              state: value.children === answer ? 'incorrect' : 'normal'
            };
      })
    );

    setTimeout(() => {
      _handleChangeCurrentIndex(currentIndex + 1);
      _calculateHealth(correctness, answer);
    }, 1000);
  };

  const _handleValidatePassage = () => {
    const currQuestion = questions[currentIndex];
    if (currQuestion.questions?.length !== Object.keys(passageAnswers).length)
      return;
    const temp = { ...passageAnswers };
    let countCorrect = 0;
    Object.keys(passageAnswers).forEach((index) => {
      if (currQuestion.questions != undefined) {
        let correctAnswer = currQuestion.questions[
          parseInt(index)
        ].answers.find(
          (value) =>
            value.answer == passageAnswers[index].children && value.correctness
        );
        let correctness = correctAnswer !== undefined;
        if (correctness) countCorrect++;
        temp[index] = {
          children: passageAnswers[index].children,
          state: correctness ? 'correct' : 'incorrect'
        };
      }
    });
    _handleChangePassageAnswers(temp);
    setTimeout(() => {
      _calculateHealth(false, '', countCorrect);
      _handleChangePassageAnswers({});
      _handleChangeCurrentIndex(currentIndex + 1);
    }, 1000);
  };
  const _calculateHealth = (
    correctness: boolean,
    answer: string,
    countCorrect?: number
  ) => {
    if (countCorrect === undefined) {
      if (correctness) {
        _handleChangeEnemyHealth(enemyHealth - 10);
        _handleChangeScore(score + 1);
      } else {
        _handleChangePlayerHealth(playerHealth - 10);
      }
      updateGameHistory(correctness, answer);
    } else {
      _handleChangeEnemyHealth(enemyHealth - 10 * countCorrect);
      _handleChangePlayerHealth(
        playerHealth - 10 * (Object.keys(passageAnswers).length - countCorrect)
      );
      _handleChangeScore(score + countCorrect);
      updateGameHistory(correctness, answer, countCorrect);
    }

    if (currentIndex > questions.length / 2) {
      dispatch(vocabularyDispatch.getQuestionSinglePlayerDispatch());
    }
  };
  const updateGameHistory = (
    correctness: boolean,
    answer: string,
    countCorrect?: number
  ) => {
    const currQuestion = questions[currentIndex];
    switch (currQuestion?.questionsType) {
      case 'vocabulary': {
        dispatch(
          gameplayCoreActions.changeGameHistory({
            gameId: currentGameHistory?.gameId,
            current_score: correctness ? score + 1 : score,
            vocabs: currentGameHistory?.vocabs.concat({
              vocabularyId: currQuestion.dataId,
              answer: answer,
              question: currQuestion.question,
              correctness: correctness
            }),
            sentences: currentGameHistory?.sentences,
            passages: currentGameHistory?.passages
          })
        );
        break;
      }
      case 'sentence': {
        dispatch(
          gameplayCoreActions.changeGameHistory({
            gameId: currentGameHistory?.gameId,
            current_score: correctness ? score + 1 : score,
            vocabs: currentGameHistory?.vocabs,
            sentences: currentGameHistory?.sentences.concat({
              sentenceId: currQuestion.dataId,
              answer: answer,
              answerId: currQuestion.correctAnswerId,
              question: currQuestion.question,
              correctness: correctness
            }),
            passages: currentGameHistory?.passages
          })
        );
        break;
      }
      case 'passage': {
        if (currQuestion.questions != undefined)
          dispatch(
            gameplayCoreActions.changeGameHistory({
              gameId: currentGameHistory?.gameId,
              current_score: countCorrect ? score + countCorrect : score,
              vocabs: currentGameHistory?.vocabs,
              sentences: currentGameHistory?.sentences,
              passages: currentGameHistory?.passages.concat(
                currQuestion.questions.map((question, index) => {
                  return {
                    answer: passageAnswers[`${index}`].children,
                    correctness: question.answers.find(
                      (value) => value.answer === passageAnswers[index].children
                    )
                      ? true
                      : false,
                    passageId: currQuestion.dataId,
                    question: question.question,
                    sentenceId: question.dataId,
                    vocabularyId: question.correctAnswerId
                  };
                })
              )
            })
          );
        break;
      }
    }
  };
  const _handleDragEnd = ({ over, active }: DragEndEvent) => {
    let id = over?.id.toString();
    if (id) {
      let temp = { ...passageAnswers };
      temp[id] = { children: active.id.toString(), state: 'normal' };
      _handleChangePassageAnswers(temp);
      // _handleChangeAnswers(
      //   answers.filter((answer) => answer.children !== active.id.toString())
      // );
    }
  };
  const _handleUnselectPassageAnswer = (index?: number) => {
    if (index) {
      let temp = { ...passageAnswers };
      delete temp[index];
      _handleChangePassageAnswers(temp);
    }
  };
  const onPause = () => {
    // dispatch(modalActions.onOpen('PauseMenu'));
  };

  //useEffect
  useEffect(() => {
    dispatch(vocabularyDispatch.getRandomVocabularyDispatch());
    dispatch(vocabularyDispatch.getQuestionSinglePlayerDispatch());
  }, []);

  useEffect(() => {
    _addQuestion();
  }, [isLoadingVocabulary, isLoadingQuestion, currentIndex]);

  useEffect(() => {
    if (playerHealth <= 0) {
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
    question:
      type === 'passage'
        ? questions[currentIndex].questions?.map((value) => value.question)
        : [question],
    pos: pos ?? '',
    type,
    passageAnswers: passageAnswers,
    onAnswer: _validateAnswer,
    onUnselectePassageAnswer: _handleUnselectPassageAnswer,
    onDragEnd: _handleDragEnd,
    onValidatePassage: _handleValidatePassage
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
