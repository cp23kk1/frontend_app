import { ReactNode, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';

import { TState } from '../core/VocaverseCoreContainer';
import userCoreDispatch from '../user/user-core/user-core-dispatch';
import userCoreSelectors from '../user/user-core/user-core-selectors';
import {
  TJoinCreateLobby,
  TPlayer
} from '@/components/modules/V2/lobby/JoinCreateLobby/type';
import { TWebSocketData } from '@/types/vocaverse/api/response';
import { TLobby } from '@/components/modules/V2/lobby/Lobby/type';
import { TMultiPlayerGameplay } from '@/components/modules/V2/multiplayer/MultiplayerGameplay/type';
import { TPlayerCard } from '@/components/common/V2/PlayerCard/type';
import { TMultiplayerQuestion } from '@/components/modules/V2/multiplayer/MultiPlayerQuestion/type';
import {
  dispatch as vocabularyDispatch,
  selectors as questionsSelectors
} from '../gameplay/question';
import { TChoiceAnswer } from '@/components/common/V2/ChoiceAnswer/type';
import { modalAlert } from '@/components/common/Modal';
import ModalDecision from '@/components/common/V2/ModalDecision';
import ErrorModal from '@/components/common/Modal/ModalError';

const MultiplayerGameplayContainer = ({
  render,
  onChangeState,
  onSetting,
  onCloseModalSetting,
  state
}: {
  render: (props: TMultiPlayerGameplay) => ReactNode;
  onChangeState: (input: TState) => void;
  onSetting: () => void;
  onCloseModalSetting: () => void;
  state: TState;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const questions = useAppSelector(questionsSelectors.questionsSeletor);
  const isQuestionsLoading = useAppSelector(
    questionsSelectors.isQuestionsLoadingSelector
  );

  const userProfile = useAppSelector(userCoreSelectors.userProfileSelector);
  const [conn, setConn] = useState<WebSocket>(state.data.wsConnection);
  const [roomId, setRoomId] = useState<string>(state.data.roomId);
  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>(
    state.data.speed
  );

  const [players, setPlayers] = useState<TPlayerCard[]>(
    state.data.listPlayers.map(
      (player: TPlayer, index: number): TPlayerCard => {
        return { ...player, score: 0, rank: ++index };
      }
    )
  );

  const [maxRound, setMaxRound] = useState<number>(state.data.maxRound);
  const [role, setRole] = useState<'host' | 'joiner'>(state.data.role);

  const [currentRound, setCurrentRound] = useState<number>(1);
  const [answers, setAnswers] = useState<TChoiceAnswer[]>([]);
  const [question, setQuestion] = useState<string>('');
  const [extra, setExtra] = useState<string>('');

  const handleChangeCurrentRound = (input: number) => {
    setCurrentRound(input);
  };

  const handleChangeAnswers = (input: TChoiceAnswer[]) => {
    setAnswers(input);
  };

  const handleChangeQuestion = (input: string) => {
    setQuestion(input);
  };

  const handleChangeExtra = (input: string) => {
    setExtra(input);
  };

  const handleChangePlayers = (input: TPlayerCard[]) => {
    setPlayers(input);
  };

  const handleClickAnswer = (answerId: string) => {
    conn.send(
      JSON.stringify({
        msg: `User: ${userProfile?.displayName} has answered.`,
        from: `system`,
        msgType: 'Answer',
        answerId: answerId,
        timer: timer.current,
        userData: userProfile
      } as TWebSocketData)
    );
  };

  // const [timer, setTimer] = useState<number>(0);
  const timer = useRef(0);

  // const handleChangeTimer = (input: number) => {
  //   setTimer(input);
  // };

  if (conn) {
    conn.onclose = function (evt) {
      if (evt.code == 1000) {
      } else if (evt.code == 3000) {
        const modal = modalAlert();
        modal.render({
          children: ErrorModal({
            errorMessage: 'You leave the game.',
            errorStatus: 'Disconnected from lobby'
          }),
          closeable: false
        });
        onChangeState({
          page: 'host-lobby',
          data: { pageMode: 'join' },
          listPage: state.listPage
        });
      } else {
        const modal = modalAlert();
        modal.render({
          children: ErrorModal({
            errorMessage: 'Host closed lobby.',
            errorStatus: 'Disconnected from lobby'
          }),
          closeable: false
        });
        onChangeState({
          page: 'host-lobby',
          data: { pageMode: 'join' },
          listPage: state.listPage
        });
      }
      console.log('close');
    };
    conn.onopen = function () {
      conn.send(
        JSON.stringify({
          msg: `User: ${userProfile?.displayName} has joined.`,
          from: `system`,
          msgType: 'UserJoin',
          userData: userProfile
        } as TWebSocketData)
      );
    };
    conn.onmessage = function (evt) {
      let message = JSON.parse(evt.data) as TWebSocketData;
      switch (message.msgType) {
        case 'UpdateData':
          let temp = message.listPlayer as TPlayerCard[];
          handleChangePlayers(
            temp
              .sort((a: TPlayerCard, b: TPlayerCard) => {
                return b.score - a.score;
              })
              .map((player, index) => {
                return { ...player, rank: ++index };
              })
          );
          break;
        case 'ShowAnswer':
          handleChangeAnswers(
            message.currentQuestion.answers.map((answer) => {
              return { ...answer, onClick: handleClickAnswer, disabled: true };
            })
          );
          break;
        case 'CloseLobby':
          conn.close();
          onChangeState({ page: 'gamemode', listPage: state.listPage });
          break;
        case 'KickUser':
          setPlayers([
            ...players.filter((player) => {
              return player.id !== message.kickUserId;
            })
          ]);
          if (userProfile?.id === message.kickUserId) {
            conn.send(
              JSON.stringify({
                msg: `User: ${userProfile?.displayName} has left.`,
                from: `system`,
                msgType: 'UserLeft',
                userData: userProfile
              } as TWebSocketData)
            );
            conn.close(3000);
          }

          break;
        case 'EndGame':
          onChangeState({
            page: 'multiplayer-result',
            listPage: state.listPage,
            data: {
              listPlayers: players,
              role: role,
              maxRound: maxRound,
              mode: state.data.mode,
              wsConnection: conn
            }
          });
          break;
        case 'StartGame':
          onChangeState({
            page: 'multiplay-gameplay',
            listPage: state.data.listPage,
            data: { wsConnection: conn, listPlayers: players }
          });
          break;
        case 'ChangeQuestion':
          handleChangeCurrentRound(message.currentRound);
          handleChangeAnswers(
            message.currentQuestion.answers.map((answer) => {
              return { ...answer, onClick: handleClickAnswer };
            })
          );
          handleChangeQuestion(message.currentQuestion.question);
          handleChangeExtra(message.currentQuestion.extra);
          break;
        case 'Timer':
          if (role !== 'host') timer.current = message.timer;
          break;
        case 'Answer':
          if (role === 'host') {
            if (
              questions[currentRound - 1].correctAnswerId === message.answerId
            ) {
              let tempListPlayer = players
                .map((player) => {
                  return player.id === message.userData.id
                    ? {
                        ...player,
                        score:
                          player.score +
                          Math.floor(
                            100 / (timer.current < 0.5 ? 1 : timer.current)
                          )
                      }
                    : { ...player };
                })
                .sort((a, b) => {
                  return b.score - a.score;
                });
              handleChangePlayers([...tempListPlayer]);
              conn.send(
                JSON.stringify({
                  msg: `System: update point.`,
                  from: `system`,
                  msgType: 'UpdateData',
                  listPlayer: [...tempListPlayer],
                  userData: userProfile
                } as TWebSocketData)
              );
            }
          }
          if (message.userData.id === userProfile?.id)
            handleChangeAnswers(
              answers.map((answer) => {
                return { ...answer, disabled: true };
              })
            );

          break;
      }
    };
    conn.onerror = function (err) {
      console.log('Socket Error: ', err);
    };
  }

  useEffect(() => {
    dispatch(userCoreDispatch.getUserProfileDispatch());
    setConn(state.data.wsConnection);
    setRoomId(state.data.roomId);
    setPlayers(
      state.data.listPlayers.map(
        (player: TPlayer, index: number): TPlayerCard => {
          return { ...player, score: 0, rank: ++index };
        }
      )
    );
    setMaxRound(state.data.maxRound);
    setRole(state.data.role);
    setSpeed(state.data.speed);
  }, []);

  useEffect(() => {
    if (
      currentRound <= maxRound &&
      role === 'host' &&
      !isQuestionsLoading &&
      questions.length > 0
    ) {
      conn.send(
        JSON.stringify({
          msg: `System: changed question round ${currentRound}.`,
          from: `system`,
          msgType: 'ChangeQuestion',
          currentQuestion: {
            answers: questions[currentRound - 1].answers
              .map((answer) => {
                return {
                  answerId: answer.answerId,
                  answer: answer.answer,
                  onClick: handleClickAnswer,
                  state: 'normal'
                };
              })
              .toSorted(() => 0.5 - Math.random()),
            extra: questions[currentRound - 1].pos ?? '',
            question: questions[currentRound - 1].question
          },
          currentRound: currentRound,
          userData: userProfile
        } as TWebSocketData)
      );
      const interval = setInterval(() => {
        let timeLimit = speed === 'slow' ? 10 : speed === 'normal' ? 5 : 3;
        if (timer.current < timeLimit) {
          timer.current = timer.current + 0.2;
        } else {
          timer.current = 0;
          if (currentRound < questions.length && currentRound < maxRound) {
            conn.send(
              JSON.stringify({
                msg: `System:  update point.`,
                from: `system`,
                msgType: 'ShowAnswer',
                currentQuestion: {
                  answers: questions[currentRound - 1].answers.map((answer) => {
                    return {
                      answerId: answer.answerId,
                      answer: answer.answer,
                      onClick: handleClickAnswer,
                      state:
                        answer.answerId ===
                        questions[currentRound - 1].correctAnswerId
                          ? 'correct'
                          : 'incorrect'
                    };
                  }),
                  extra: questions[currentRound - 1].pos ?? '',
                  question: questions[currentRound - 1].question
                },
                userData: userProfile
              } as TWebSocketData)
            );

            setTimeout(() => {
              setCurrentRound(currentRound + 1);
            }, 1000);
          } else {
            conn.send(
              JSON.stringify({
                msg: `System:  update point.`,
                from: `system`,
                msgType: 'ShowAnswer',
                currentQuestion: {
                  answers: questions[currentRound - 1].answers.map((answer) => {
                    return {
                      answerId: answer.answerId,
                      answer: answer.answer,
                      onClick: handleClickAnswer,
                      state:
                        answer.answerId ===
                        questions[currentRound - 1].correctAnswerId
                          ? 'correct'
                          : 'incorrect'
                    };
                  }),
                  extra: questions[currentRound - 1].pos ?? '',
                  question: questions[currentRound - 1].question
                },
                userData: userProfile
              } as TWebSocketData)
            );
            setTimeout(() => {
              conn.send(
                JSON.stringify({
                  msg: `System: update point.`,
                  from: `system`,
                  msgType: 'EndGame',
                  listPlayer: players,
                  userData: userProfile
                } as TWebSocketData)
              );
            }, 1000);
          }
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [currentRound, isQuestionsLoading]);

  const handleClickFinish = () => {
    if (role === 'host') {
      const modal = modalAlert();
      modal.render({
        children: ModalDecision({
          question: 'ARE YOU SURE THAT YOU WANT TO END THIS GAME?',
          onClick: (boolean) => {
            if (boolean) {
              conn?.send(
                JSON.stringify({
                  msg: `User: ${userProfile?.displayName} has joined.`,
                  from: `system`,
                  msgType: 'CloseLobby',
                  userData: userProfile,
                  isReady: false
                } as TWebSocketData)
              );
              conn?.close(1000);
              modal.destroy();
              onCloseModalSetting();
              onChangeState({ page: 'gamemode', listPage: state.listPage });
            } else {
              modal.destroy();
            }
          }
        }),
        closeable: false
      });
    } else {
      const modal = modalAlert();
      modal.render({
        children: ModalDecision({
          question: 'ARE YOU SURE THAT YOU WANT TO LEAVE THIS GAME?',
          onClick: (boolean) => {
            if (boolean) {
              conn?.send(
                JSON.stringify({
                  msg: `System: User Leave:${userProfile?.id}.`,
                  from: `system`,
                  msgType: 'KickUser',
                  kickUserId: userProfile?.id,
                  userData: userProfile,
                  isReady: false
                } as TWebSocketData)
              );
              onCloseModalSetting();
              modal.destroy();
              onChangeState({ page: 'gamemode', listPage: state.listPage });
            } else {
              modal.destroy();
            }
          }
        }),
        closeable: false
      });
    }
  };
  return render({
    currentRound: currentRound,
    listPlayer: { maxPlayer: 8, players: players },
    maxRound: maxRound,
    multiplayerQuestion: {
      answers: answers,
      extra: extra,
      question: question
    },
    onClickFinish: handleClickFinish,
    onPause: onSetting
  });
};
export default MultiplayerGameplayContainer;
