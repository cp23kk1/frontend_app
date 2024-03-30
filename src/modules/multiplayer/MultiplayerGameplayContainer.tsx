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

const MultiplayerGameplayContainer = ({
  render,
  onChangeState,
  state
}: {
  render: (props: TMultiPlayerGameplay) => ReactNode;
  onChangeState: (input: TState) => void;
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
          handleChangePlayers(message.listPlayer as TPlayerCard[]);
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
                            100 / (timer.current === 0 ? 1 : timer.current)
                          )
                      }
                    : { ...player };
                })
                .sort((a, b) => {
                  return a.score - b.score;
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
  }, []);

  useEffect(() => {
    if (
      currentRound < maxRound &&
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
        if (timer.current < 10) {
          timer.current = timer.current + 0.2;
        } else {
          timer.current = 0;
          if (currentRound < questions.length) {
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

              console.log('end game');
            }, 1000);
          }
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [currentRound, isQuestionsLoading]);

  return render({
    currentRound: currentRound,
    listPlayer: { maxPlayer: 8, players: players },
    maxRound: maxRound,
    multiplayerQuestion: {
      answers: answers,
      extra: extra,
      question: question
    }
  });
};
export default MultiplayerGameplayContainer;
