import { ReactNode, useEffect, useState } from 'react';
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
import { TMultiplayerResult } from '@/components/modules/V2/multiplayer/MultiPlayerResult/type';
import questionDispatch from '../gameplay/question/question-dispatch';
import questionActionTypes from '../gameplay/question/question-action-types';
import questionActions from '../gameplay/question/question-actions';

const MultiplayerResultContainer = ({
  render,
  onChangeState,
  state
}: {
  render: (props: TMultiplayerResult) => ReactNode;
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

  const [gameMode, setGameMode] = useState<'all' | 'vocabulary'>(
    state.data.mode
  );
  const handleChangeGameMode = (input: React.FormEvent<HTMLInputElement>) => {
    setGameMode(input.currentTarget.value as 'all' | 'vocabulary');
  };

  const [timer, setTimer] = useState<number>(10);
  const handleClickBack = () => {
    if (role === 'host') {
      conn.send(
        JSON.stringify({
          msg: `System: Lobby closed.`,
          from: `system`,
          msgType: 'CloseLobby',
          userData: userProfile
        } as TWebSocketData)
      );
    } else {
      conn.send(
        JSON.stringify({
          msg: `User: User ${userProfile?.displayName} has left.`,
          from: `system`,
          msgType: 'UserLeft',
          userData: userProfile
        } as TWebSocketData)
      );
    }
  };
  const handleClickPlay = () => {
    console.log(state.data.mode);
    console.log(state.data.maxRound);
    dispatch(
      questionDispatch.getQuestionMultiPlayerDispatch({
        mode: state.data.mode,
        numberOfQuestion: state.data.maxRound
      })
    );
    conn?.send(
      JSON.stringify({
        msg: `Game: has started.`,
        from: `system`,
        msgType: 'StartGame',
        userData: userProfile,
        maxRound: maxRound
      } as TWebSocketData)
    );
    onChangeState({
      page: 'multiplay-gameplay',
      listPage: state.listPage,
      data: {
        wsConnection: conn,
        listPlayers: players,
        maxRound: maxRound,
        mode: gameMode,
        role: role
      }
    });
  };
  const handleCloseLobby = () => {
    conn.send(
      JSON.stringify({
        msg: `System: Lobby closed.`,
        from: `system`,
        msgType: 'CloseLobby',
        userData: userProfile
      } as TWebSocketData)
    );
  };

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
          // handleChangePlayers(message.listPlayer as TPlayerCard[]);
          break;
        case 'Timer':
          if (role !== 'host') setTimer(message.timer);
          break;
        case 'UserLeft':
          if (userProfile?.id === message.userData.id) {
            conn.close();
            onChangeState({ page: 'gamemode', listPage: state.listPage });
          }
          setPlayers(
            players.filter((player) => {
              return player.id !== message.userData.id;
            })
          );
          break;
        case 'CloseLobby':
          onChangeState({ page: 'gamemode', listPage: state.listPage });
          break;
        case 'StartGame':
          onChangeState({
            page: 'multiplay-gameplay',
            listPage: state.listPage,
            data: {
              wsConnection: conn,
              listPlayers: players,
              maxRound: maxRound,
              mode: gameMode,
              role: role
            }
          });
          break;
      }
    };
    conn.onerror = function (err) {
      console.log('Socket Error: ', err);
    };
  }

  useEffect(() => {
    dispatch(userCoreDispatch.getUserProfileDispatch());
    dispatch(questionActions.clear());
    setMaxRound(state.data.maxRound);
    setGameMode(state.data.mode);

    setConn(state.data.wsConnection);
    setRoomId(state.data.roomId);
    setPlayers(
      state.data.listPlayers.map((player: TPlayerCard): TPlayerCard => {
        return { ...player };
      })
    );
    setMaxRound(state.data.maxRound);
    setRole(state.data.role);
  }, []);

  useEffect(() => {
    if (role === 'host') {
      const interval = setInterval(() => {
        setTimer((currentTime) => {
          if (currentTime > 0) {
            conn.send(
              JSON.stringify({
                msg: `System:Next game will begin in ${currentTime}.`,
                from: `system`,
                msgType: 'Timer',
                timer: currentTime,
                userData: userProfile
              } as TWebSocketData)
            );
            return currentTime - 1;
          } else {
            setTimer(0);
            handleClickPlay();
            clearInterval(interval);
            return currentTime;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  return render({
    role: role,
    players: players,
    onClickBack: handleClickBack,
    onClickPlay: handleClickPlay,
    onCloseLobby: handleCloseLobby,
    timer: timer
  });
};
export default MultiplayerResultContainer;
