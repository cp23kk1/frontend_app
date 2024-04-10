import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';

import { TState } from '../../core/VocaverseCoreContainer';
import userCoreDispatch from '../../user/user-core/user-core-dispatch';
import userCoreSelectors from '../../user/user-core/user-core-selectors';
import {
  TJoinCreateLobby,
  TPlayer
} from '@/components/modules/V2/lobby/JoinCreateLobby/type';
import { TWebSocketData } from '@/types/vocaverse/api/response';
import questionDispatch from '../../gameplay/question/question-dispatch';
import { modalAlert } from '@/components/common/Modal';
import ModalDecision from '@/components/common/V2/ModalDecision';
import lobbySelectors from './lobby-selectors';
import lobbyDispatch from './lobby-dispatch';
import ErrorModal from '@/components/common/Modal/ModalError';

const JoinCreateLobbyContainer = ({
  render,
  onChangeState,
  state
}: {
  render: (props: TJoinCreateLobby) => ReactNode;
  onChangeState: (input: TState) => void;
  state: TState;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const userProfile = useAppSelector(userCoreSelectors.userProfileSelector);

  const [currentPageMode, setCurrentPageMode] = useState<'create' | 'join'>(
    state.data?.pageMode ?? 'create'
  );
  const lobby = useAppSelector(lobbySelectors.lobbySelector);
  const isLoadingLobby = useAppSelector(lobbySelectors.isLoadingLobbySelector);
  const handleOnChangeCurrentPageMode = (input: 'create' | 'join') => {
    if (input === 'join') {
      const modal = modalAlert();
      if (currentPageMode === 'create') {
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
                    isReady: currentPageMode === 'create'
                  } as TWebSocketData)
                );
                conn?.close(1000);
                setCurrentPageMode(input);
                modal.destroy();
              } else {
                modal.destroy();
              }
            }
          }),
          closeable: false
        });
      }
    } else {
      setCurrentPageMode(input);
    }
  };

  const [players, setPlayers] = useState<TPlayer[]>([]);
  const handleChangePlayers = (newPlayers: TPlayer[]) => {
    setPlayers(newPlayers);
  };

  //create
  const [gameMode, setGameMode] = useState<'all' | 'vocabulary'>('vocabulary');
  const handleChangegameMode = (input: React.FormEvent<HTMLInputElement>) => {
    setGameMode(input.currentTarget.value as 'all' | 'vocabulary');
  };

  const [numberOfQuestion, setNumberOfQuestion] = useState<number>(10);
  const handleOnChangeNumberOfQuestion = (input: number) => {
    if (input >= 1) {
      setNumberOfQuestion(input);
    }
  };

  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>('slow');
  const handleOnChangeSpeed = (input: 'slow' | 'normal' | 'fast') => {
    setSpeed(input);
  };

  const [isPlayButtonDisabled, setIsPlayButtonDisabled] =
    useState<boolean>(true);

  const handleCloseLobby = () => {
    const modal = modalAlert();
    if (currentPageMode === 'create') {
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
                  isReady: currentPageMode === 'create'
                } as TWebSocketData)
              );
              conn?.close(1000);
              modal.destroy();
              handleClickBack();
            } else {
              modal.destroy();
            }
          }
        }),
        closeable: false
      });
    }
  };
  const onClickPlay = () => {
    dispatch(
      questionDispatch.getQuestionMultiPlayerDispatch({
        mode: gameMode,
        numberOfQuestion
      })
    );
    conn?.send(
      JSON.stringify({
        msg: `Game: has started.`,
        from: `system`,
        msgType: 'StartGame',
        userData: userProfile,
        maxRound: numberOfQuestion
      } as TWebSocketData)
    );
    onChangeState({
      page: 'multiplay-gameplay',
      listPage: state.listPage,
      data: {
        wsConnection: conn,
        listPlayers: players,
        maxRound: numberOfQuestion,
        mode: gameMode,
        speed: speed,
        role: 'host'
      }
    });
  };
  const onKick = (id: number) => {
    conn?.send(
      JSON.stringify({
        msg: `Host: Kicked user id:${id}.`,
        from: `system`,
        msgType: 'KickUser',
        kickUserId: id,
        userData: userProfile,
        isReady: currentPageMode === 'create'
      } as TWebSocketData)
    );
  };

  //join
  const [roomId, setRoomId] = useState<string>('');
  const handleChangeRoomId = (input: React.FormEvent<HTMLInputElement>) => {
    const numberRegex = /^[0-9]/;
    if (
      numberRegex.test(input.currentTarget.value) ||
      input.currentTarget.value == ''
    )
      setRoomId(input.currentTarget.value);
  };

  const handleClickBack = () => {
    onChangeState({
      page: 'gamemode'
    });
  };

  ``;

  //websocket
  const [conn, setConn] = useState<WebSocket | undefined>();
  const [isConnect, setIsConnect] = useState<boolean>(false);

  const onCreate = () => {
    let roomId = Math.floor(100000 + Math.random() * 900000);
    setConn(
      new WebSocket(
        `${process.env.WS_URL}/multiplayer/create-lobby?roomId=${roomId}&roomName=VocaverseRoom${roomId}&numberPlayer=8`
      )
    );
    setRoomId(`${roomId}`);
    setIsConnect(true);
  };
  const onJoin = () => {
    let connection = new WebSocket(
      `${process.env.WS_URL}/multiplayer/join-lobby?roomId=${roomId}&roomName=VocaverseRoom${roomId}&numberPlayer=8`
    );
    setConn(connection);
    setIsConnect(true);
    onChangeState({
      page: 'lobby',
      listPage: state.listPage,
      data: { wsConnection: connection, roomId }
    });
  };

  const handlePlayQuick = () => {
    const modal = modalAlert();
    if (currentPageMode === 'create') {
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
                  isReady: currentPageMode === 'create'
                } as TWebSocketData)
              );
              conn?.close(1000);
              modal.destroy();
              dispatch(lobbyDispatch.getLobbyDispatch());
              setCurrentPageMode('join');
            } else {
              modal.destroy();
            }
          }
        }),
        closeable: false
      });
    } else {
      dispatch(lobbyDispatch.getLobbyDispatch());
    }
  };

  if (conn) {
    conn.onclose = function (evt) {
      setIsConnect(false);

      console.log('close');
    };
    conn.onopen = function () {
      conn.send(
        JSON.stringify({
          msg: `User: ${userProfile?.displayName} has joined.`,
          from: `system`,
          msgType: 'UserJoin',
          userData: userProfile,
          isReady: currentPageMode === 'create'
        } as TWebSocketData)
      );
    };
    conn.onmessage = function (evt) {
      let message = JSON.parse(evt.data) as TWebSocketData;
      switch (message.msgType) {
        case 'UserJoin':
          let tempPlayer = {
            id: message.userData.id ?? 0,
            displayName: message.userData.displayName ?? '',
            img: message.userData.image ?? '',
            isReady: message.isReady
          };
          handleChangePlayers([...players, tempPlayer]);
          if (currentPageMode === 'create')
            conn.send(
              JSON.stringify({
                msg: `User: ${userProfile?.displayName} has joined.`,
                from: `system`,
                msgType: `UpdateData`,
                userData: userProfile,
                isReady: currentPageMode === 'create',
                listPlayer: [...players, tempPlayer]
              } as TWebSocketData)
            );
          break;
        case 'UpdateData':
          if (currentPageMode !== 'create') {
            setPlayers([...players, ...message.listPlayer]);
          }
          break;
        case 'UserLeft':
          if (currentPageMode === 'create') {
            setPlayers([
              ...players.filter((player) => {
                return player.id !== message.userData.id;
              })
            ]);
          }
          break;
        case 'UserReady':
          setPlayers([
            ...players.map((player) => {
              return player.id === message.userData.id
                ? { ...player, isReady: message.isReady }
                : player;
            })
          ]);
          break;
      }
    };
    conn.onerror = function (err) {
      console.log('Socket Error: ', err);
    };
  }

  useEffect(() => {
    dispatch(userCoreDispatch.getUserProfileDispatch());
  }, []);
  useEffect(() => {
    conn?.close();
    setPlayers([]);
    setRoomId('');
    if (currentPageMode === 'create') {
      onCreate();
    }
  }, [currentPageMode]);
  useEffect(() => {
    if (
      players.every((player) => {
        return player.isReady;
      }) &&
      players.length > 1
    ) {
      setIsPlayButtonDisabled(false);
    } else {
      setIsPlayButtonDisabled(true);
    }
  }, [players]);

  const [firstTime, setFirstTime] = useState(true);
  useEffect(() => {
    let randomLobby = lobby[Math.floor(Math.random() * lobby.length)];
    if (!isLoadingLobby) {
      if (randomLobby) {
        let connection = new WebSocket(
          `${process.env.WS_URL}/multiplayer/join-lobby?roomId=${randomLobby.roomId}&roomName=VocaverseRoom${randomLobby.roomId}&numberPlayer=8`
        );
        setConn(connection);
        onChangeState({
          page: 'lobby',
          listPage: state.listPage,
          data: { wsConnection: connection, roomId: randomLobby.roomId }
        });
      } else {
        if (!firstTime) {
          const modal = modalAlert();
          modal.render({
            closeable: false,
            children: ErrorModal({
              errorMessage:
                'You can "Create a lobby" on game menu or try again later.',
              errorStatus: 'There is no lobby avaiable'
            })
          });
        }
        setFirstTime(false);
      }
    }
  }, [isLoadingLobby]);
  return render({
    currentPage: currentPageMode,
    onChangeMode: handleOnChangeCurrentPageMode,
    isJoinButtonDisabled: roomId.length !== 6,
    onChangeRoomID: handleChangeRoomId,
    onClickBack: handleClickBack,
    onClickJoin: onJoin,
    onClickPlayQuickly: () => {
      handlePlayQuick();
    },
    onClickPlay: onClickPlay,
    createLobby: {
      onKick: onKick,
      onClickCloseLobby: handleCloseLobby,
      isPlayDisabled: isPlayButtonDisabled,
      gameSetting: {
        mode: gameMode,
        onChangeMode: handleChangegameMode,
        onChangeSpeed: handleOnChangeSpeed,
        onChangeNumQuestions: handleOnChangeNumberOfQuestion,
        speed: speed,
        numQuestions: numberOfQuestion
      },
      roomID: roomId,
      players: players
    }
  });
};
export default JoinCreateLobbyContainer;
