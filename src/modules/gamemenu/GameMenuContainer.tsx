import { ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';

import { TState } from '../core/VocaverseCoreContainer';

import { THome } from '@/components/modules/V2/home-menu/HomeMenu/type';
import scoreSelectors from '../score/score-selectors';
import scoreDispatch from '../score/score-dispatch';
import userCoreSelectors from '../user/user-core/user-core-selectors';
import authSelectors from '../user/auth/auth-selectors';
import { modalAlert } from '@/components/common/Modal';
import NewLoginModal from '@/components/modules/V2/home-menu/NewLoginModal';
import { getGoogleUrl } from '@/utils/getGoogleUrl';
import authDispatch from '../user/auth/auth-dispatch';
import userCoreDispatch from '../user/user-core/user-core-dispatch';
import { TModal } from '@/components/common/Modal/type';
import lobbyDispatch from '../multiplayer/lobby/lobby-dispatch';
import lobbySelectors from '../multiplayer/lobby/lobby-selectors';
import { TWebSocketData } from '@/types/vocaverse/api/response';
import ModalTutorial from '@/components/common/V2/ModalTutorial';

const GameMenuContainer = ({
  render,
  onChangeState,
  state
}: {
  render: (props: THome) => ReactNode;
  onChangeState: (input: TState) => void;
  state: TState;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userProfile = useAppSelector(userCoreSelectors.userProfileSelector);
  const isGuestLoginLoading = useAppSelector(
    authSelectors.isGuestLoginLoadingSelector
  );
  const scoreBoard = useAppSelector(scoreSelectors.scoreBoardSelector);
  const userScore = useAppSelector(scoreSelectors.userScoreBoardSelector);
  const isLogoutLoading = useAppSelector(authSelectors.isLogoutLoading);
  const isUserProfileLoading = useAppSelector(
    userCoreSelectors.isUserProfileLoadingSelector
  );
  const bestScore = useAppSelector(scoreSelectors.bestScoreSelector);

  const lobby = useAppSelector(lobbySelectors.lobbySelector);
  const isLoadingLobby = useAppSelector(lobbySelectors.isLoadingLobbySelector);
  const [conn, setConn] = useState<WebSocket | undefined>();

  const [currentPage, setCurrentPage] = useState<
    'home' | 'leaderboard' | 'history' | 'item'
  >('home');
  const handleChangeCurrentPage = (
    input: 'home' | 'leaderboard' | 'history' | 'item'
  ) => {
    if (userProfile || input == 'home') {
      setCurrentPage(input);
    } else {
      onLogin();
    }
  };

  const onLogin = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    const modal = modalAlert();
    localStorage.setItem('currentState', JSON.stringify(state));

    modal.render({
      children: NewLoginModal({
        onClickGoogleLogin: onGoogleLogin,
        onClickGuestLogin: onGuestLogin(modal),
        onClickPolicy: () => {},
        onClickTerm: () => {}
      }),
      closeable: true
    });
  };
  const onGoogleLogin = () => {
    router.push(
      getGoogleUrl(
        router.pathname + userProfile ? `?id=${userProfile?.id}` : ''
      )
    );
  };
  const onGuestLogin = (modal: {
    render: (props: TModal) => void;
    destroy: () => void;
  }) => {
    return () => {
      dispatch(authDispatch.guestLoginDispatch());
      modal.destroy();
    };
  };
  const handlePlayQuick = () => {
    dispatch(lobbyDispatch.getLobbyDispatch());
  };

  const onClickLogout = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    dispatch(authDispatch.logoutDispatch());
  };

  const onClickProfile = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    onChangeState({ page: 'user-profile' });
  };

  const onClickTutorial = () => {
    const modal = modalAlert();
    modal.render({ closeable: true, children: ModalTutorial() });
  };
  useEffect(() => {
    dispatch(scoreDispatch.getLeaderBoardDispatch());
    dispatch(scoreDispatch.getBestScoreDispatch());
    localStorage.setItem('currentState', '');
  }, [isUserProfileLoading, userProfile, currentPage]);

  useEffect(() => {
    dispatch(userCoreDispatch.getUserProfileDispatch());
  }, [isGuestLoginLoading, isLogoutLoading]);

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
          userData: userProfile,
          isReady: false
        } as TWebSocketData)
      );
    };
  }

  useEffect(() => {
    let randomLobby = lobby[Math.floor(Math.random() * lobby.length)];
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
    }
  }, [isLoadingLobby]);

  return render({
    leaderBoard: {
      currentPlayer: {
        displayName: userScore.userName,
        score: userScore.score,
        id: userScore.userId,
        img: userScore.userImage,
        isReady: false,
        rank: ''
      },
      listPlayer: scoreBoard.map((player) => {
        return {
          displayName: player.userName,
          isReady: false,
          score: player.score,
          id: player.userId,
          img: player.userImage,
          rank: player.no
        };
      })
    },
    currentPage: currentPage,
    onChangePage: handleChangeCurrentPage,
    onCLickSettings: () => {},
    onClickSignIn: onLogin,
    onClickTutorial: onClickTutorial,
    profileTab: {
      onClickLogout: onClickLogout,
      onClickProfile: onClickProfile,
      onClickSignIn: onLogin,
      userName: userProfile?.displayName,
      profilePic: userProfile?.image
    },
    modes: [
      {
        modeName: 'SINGLE PLAYER',
        modeDesc: 'Single play mode play for train for english skills.',
        modeExtraInfo: `Best Score: ${bestScore}`,
        modeButtons: [
          {
            iconName: 'Play',
            onClick: () => {
              if (!userProfile) {
                onLogin();
              } else {
                onChangeState({
                  page: 'gameplay',
                  data: { mode: 'SINGLE PLAYER' }
                });
              }
            },
            text: 'PLAY NOW'
          }
        ]
      },
      {
        modeName: 'MULTIPLAYER',
        modeDesc: 'Multiplayer mode!! That u can play for fun!!!',
        modeExtraInfo: (
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (!userProfile) {
                onLogin();
              } else {
                onChangeState({
                  page: 'host-lobby',
                  data: { pageMode: 'join' }
                });
              }
            }}
          >
            I HAVE A CODE ?
          </div>
        ),
        modeButtons: [
          {
            iconName: 'Play',
            onClick: () => {
              if (!userProfile) {
                onLogin();
              } else {
                handlePlayQuick();
              }
            },
            text: 'PLAY QUICKLY'
          },
          {
            iconName: 'Group',
            onClick: () => {
              if (!userProfile) {
                onLogin();
              } else {
                onChangeState({ page: 'host-lobby' });
              }
            },
            text: 'CREATE A GAME'
          }
        ]
      }
    ]
  });
};
export default GameMenuContainer;
