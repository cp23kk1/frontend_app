import { ReactNode, useEffect, useRef, useState } from 'react';
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
  selectors as questionsSelectors
} from './question';
import {
  selectors as gameplayCoreSelectors,
  actions as gameplayCoreActions
} from './gameplay-core';

import { useRouter } from 'next/router';
import { TState } from '../core/VocaverseCoreContainer';
import { getPublicPath, getPublicPathPageRounting } from '@/utils/basePath';
import { DragEndEvent } from '@dnd-kit/core';
import { TGamePlay } from '@/components/modules/gameplay/GamePlay/type';
import { modalAlert } from '@/components/common/Modal';
import ModalBriefInfo from '@/components/common/V2/ModalBriefInfo';
import briefInfoDispatch from './brief-info/brief-info-dispatch';
import briefInfoSelectors from './brief-info/brief-info-selectors';
import ErrorModal from '@/components/common/Modal/ModalError';
import ModalDecision from '@/components/common/V2/ModalDecision';
import questionDispatch from './question/question-dispatch';
import questionActions from './question/question-actions';

const GamePlayContainer = ({
  render,
  onChangeState,
  onSetting,
  resetKey,
  onCloseModalSetting,
  onPlaySoundEffect,
  state
}: {
  render: (props: TGamePlay) => ReactNode;
  onChangeState: (input: TState) => void;
  onSetting: () => void;
  onCloseModalSetting: () => void;
  resetKey: () => void;
  onPlaySoundEffect: (correctness: boolean) => void;
  state: TState;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [character, setCharacter] = useState(
    '/character/player/Character1.png'
  );

  // vocabulary
  const questions = useAppSelector(questionsSelectors.questionsSeletor);
  const isLoadingVocabulary = useAppSelector(
    questionsSelectors.isLoadingVocabularySelector
  );
  const isLoadingQuestion = useAppSelector(
    questionsSelectors.isQuestionsLoadingSelector
  );
  const currentGameHistory = useAppSelector(
    gameplayCoreSelectors.currentGameHistorySelector
  );
  const briefInfo = useAppSelector(briefInfoSelectors.briefInfoSelector);
  const isBriefInfosLoading = useAppSelector(
    briefInfoSelectors.isBriefInfosLoadingSelector
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

  const [currentPos, setCurrentPos] = useState<string>();
  const _handleChangeCurrentPos = (input?: string) => {
    setCurrentPos(input);
  };
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
        _handleChangeCurrentIndex(currentIndex + 1);
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
    onPlaySoundEffect(correctness);

    setTimeout(() => {
      _handleChangeCurrentIndex(currentIndex + 1);
      _calculateHealth(correctness, answer);
    }, 1000);
  };

  const _handleValidatePassage = () => {
    const currQuestion = questions[currentIndex];
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
      const currQuestion = questions[currentIndex];
      _handleChangeEnemyHealth(enemyHealth - 10 * countCorrect);
      console.log((currQuestion.questions?.length ?? 0) - countCorrect);
      _handleChangePlayerHealth(
        playerHealth -
          10 * ((currQuestion.questions?.length ?? 0) - countCorrect)
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
                    answer: passageAnswers[`${index}`]
                      ? passageAnswers[`${index}`].children
                      : '',
                    correctness: passageAnswers[`${index}`]
                      ? question.answers.find(
                          (value) =>
                            value.answer === passageAnswers[index].children
                        )
                        ? true
                        : false
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
      if (!temp[id]) {
        temp[id] = { children: active.id.toString(), state: 'normal' };
        _handleChangePassageAnswers(temp);
        _handleChangeAnswers(
          answers.filter((answer) => answer.children !== active.id.toString())
        );
      }
    }
  };
  const _handleUnselectPassageAnswer = (index?: number) => {
    if (index != undefined) {
      let temp = { ...passageAnswers };
      _handleChangeAnswers(
        answers.concat([
          {
            children: temp[index].children,
            state: temp[index].state,
            correctness: false
          }
        ])
      );
      delete temp[index];
      _handleChangePassageAnswers(temp);
    }
  };
  const onPause = () => {
    // dispatch(modalActions.onOpen('PauseMenu'));
    onSetting();
  };

  const handleClickMore = () => {
    const currQuestion = questions[currentIndex];
    dispatch(
      briefInfoDispatch.getBriefInfoDispatch({
        word: question?.toLocaleString() ?? ''
      })
    );
    _handleChangeCurrentPos('');
  };

  //useEffect
  useEffect(() => {
    dispatch(vocabularyDispatch.getRandomVocabularyDispatch());
    dispatch(vocabularyDispatch.getQuestionSinglePlayerDispatch());
    setCharacter(localStorage.getItem('character') ?? character);
  }, []);

  useEffect(() => {
    _addQuestion();
    setCurrentPos(undefined);
  }, [isLoadingVocabulary, isLoadingQuestion, currentIndex]);

  useEffect(() => {
    if (!isBriefInfosLoading && briefInfo) {
      if (!currentPos) {
        _handleChangeCurrentPos(briefInfo.meanings[0].partOfSpeech);
      }
    }
  }, [isBriefInfosLoading]);

  useEffect(() => {
    if (!isBriefInfosLoading) {
      if (briefInfo && currentPos) {
        const modal = modalAlert();
        modal.render({
          closeable: true,
          children: ModalBriefInfo({
            word: briefInfo?.word ?? '',
            definition: briefInfo.meanings.find((info) => {
              return info.partOfSpeech === currentPos;
            })?.definitions[0].definition,
            example: briefInfo.meanings.find((info) => {
              return info.partOfSpeech === currentPos;
            })?.definitions[0].definition,
            meaning: `ไม่เฉลยหรอกนะ`,
            pos: [
              ...briefInfo.meanings.map((info) => {
                return {
                  pos: info.partOfSpeech,
                  isSelected: currentPos === info.partOfSpeech,
                  onCLick: () => {
                    modal.destroy();
                    _handleChangeCurrentPos(info.partOfSpeech);
                  }
                };
              })
            ]
          })
        });
      } else {
        if (!briefInfo && currentPos != undefined) {
          const modal = modalAlert();
          modal.render({
            closeable: false,
            children: ErrorModal({
              errorStatus: '404',
              errorMessage: 'word not found.'
            })
          });
        }
      }
    }
  }, [isBriefInfosLoading]);

  useEffect(() => {
    if (playerHealth <= 0) {
      // dispatch(modalActions.onOpen('GAMEOVER'));

      setTimeout(() => {
        // dispatch(modalActions.onClose());
        // router.push(getPublicPathPageRounting('/summary'));
        _handleChangeCurrentPos(undefined);
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
    playerHealth: playerHealth,
    playerImg: character
  };

  const handleClickRetry = () => {
    const modal = modalAlert();
    modal.render({
      closeable: false,
      children: ModalDecision({
        question: `ARE YOU SURE THAT YOU WANT
TO DISCARD THIS GAME?`,
        onClick: (bool) => {
          if (bool) {
            resetKey();
            modal.destroy();
            onCloseModalSetting();
            dispatch(questionActions.clear());
          } else {
            modal.destroy();
          }
        }
      })
    });
  };

  const handleClickFinish = () => {
    const modal = modalAlert();
    modal.render({
      closeable: false,
      children: ModalDecision({
        question: `ARE YOU SURE THAT YOU WANT
TO FINISH THIS GAME?`,
        onClick: (bool) => {
          _handleChangePlayerHealth(0);
          modal.destroy();
          onCloseModalSetting();
          if (bool) {
          } else {
            modal.destroy();
          }
        }
      })
    });
  };

  return render({
    knowledgeSectionItem: knowLedgeSection,
    animationSectionItem: animationSection,
    score,
    onPause,
    briefInfo: {
      isShow: questions[currentIndex]
        ? questions[currentIndex].questionsType === 'vocabulary'
        : false,
      definition: 'Hint',
      onClickMore: handleClickMore,
      word: question?.toLocaleString() ?? ''
    },
    onClickRetry: handleClickRetry,
    onClickFinish: handleClickFinish
  });
};
export default GamePlayContainer;
