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
import { modalAlert } from '@/components/common/Modal';
import ErrorModal from '@/components/common/Modal/ModalError';
import ModalDecision from '@/components/common/V2/ModalDecision';

const LobbyContainer = ({
  render,
  onChangeState,
  state
}: {
  render: (props: TLobby) => ReactNode;
  onChangeState: (input: TState) => void;
  state: TState;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const userProfile = useAppSelector(userCoreSelectors.userProfileSelector);
  const [conn, setConn] = useState<WebSocket>(state.data.wsConnection);
  const [roomId, setRoomId] = useState<string>(state.data.roomId);

  const [players, setPlayers] = useState<TPlayer[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);

  const handleChangeIsReady = () => {
    conn.send(
      JSON.stringify({
        msg: `User: ${userProfile?.displayName} is ${
          isReady ? 'ready' : 'not ready'
        }.`,
        from: `system`,
        msgType: 'UserReady',
        userData: userProfile,
        isReady: !isReady
      } as TWebSocketData)
    );
    setPlayers(
      players.map((player) => {
        return player.id === userProfile?.id
          ? { ...player, isReady: !isReady }
          : player;
      })
    );
    setIsReady(!isReady);
  };

  const handleChangePlayers = (input: TPlayer[]) => {
    setPlayers(input);
  };

  const handleClickLeave = () => {
    const modal = modalAlert();

    modal.render({
      children: ModalDecision({
        question: 'ARE YOU SURE THAT YOU WANT TO LEAVE THE GAME?',
        onClick: (boolean) => {
          if (boolean) {
            conn.send(
              JSON.stringify({
                msg: `User: ${userProfile?.displayName} has left.`,
                from: `system`,
                msgType: 'UserLeft',
                userData: userProfile,
                isReady: isReady
              } as TWebSocketData)
            );
            conn.close(1000);
            onChangeState({ page: 'gamemode', listPage: state.listPage });
            modal.destroy();
          } else {
            modal.destroy();
          }
        }
      }),
      closeable: false
    });
  };

  if (conn) {
    conn.onclose = function (evt) {
      if (evt.code == 1000) {
      } else {
        const modal = modalAlert();
        modal.render({
          children: ErrorModal({
            errorMessage: 'Please try again .',
            errorStatus: 'Something went wrong'
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
          userData: userProfile,
          isReady: isReady
        } as TWebSocketData)
      );
    };
    conn.onmessage = function (evt) {
      let message = JSON.parse(evt.data) as TWebSocketData;
      switch (message.msgType) {
        case 'CloseLobby':
          conn.close();
          onChangeState({ page: 'gamemode', listPage: state.listPage });
          break;

        case 'UpdateData':
          handleChangePlayers([...message.listPlayer]);

          break;
        case 'StartGame':
          onChangeState({
            page: 'multiplay-gameplay',
            listPage: state.data.listPage,
            data: {
              wsConnection: conn,
              listPlayers: players,
              maxRound: message.maxRound,
              role: 'player'
            }
          });
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
    setConn(state.data.wsConnection);

    if (!state.data.wsConnection) {
      onChangeState({
        page: 'host-lobby',
        listPage: state.listPage,
        data: { pageMode: 'join' }
      });
    }
    setRoomId(state.data.roomId);
  }, []);
  useEffect(() => {}, []);
  return render({
    currentPlayer: {
      displayName: userProfile?.displayName ?? '',
      id: userProfile?.id ?? 0,
      img: userProfile?.image ?? '',
      isReady: isReady
    },
    onClickLeave: handleClickLeave,
    onClickReady: handleChangeIsReady,
    players: players,
    roomID: roomId
  });
};
export default LobbyContainer;