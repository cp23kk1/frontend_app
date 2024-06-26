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
import ErrorModal from '@/components/common/Modal/ModalError';
import ModalPause from '@/components/common/V2/ModalPause';
import settingSelectors from '../core/setting/setting-selectors';
import settingActions from '../core/setting/setting-actions';
import { getPublicPath } from '@/utils/basePath';
import ModalDecision from '@/components/common/V2/ModalDecision';

const GameMenuContainer = ({
  render,
  onChangeState,
  onSetting,
  state
}: {
  render: (props: THome) => ReactNode;
  onChangeState: (input: TState) => void;
  onSetting: () => void;
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
        onClickTerm: () => {},
        isConnectGuest: userProfile?.email === null
      }),
      closeable: true
    });
  };
  const onGoogleLogin = () => {
    router.push(
      getGoogleUrl(
        router.pathname +
          `${userProfile?.email === null ? `?id=${userProfile?.id}` : ''}`
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
    if (userProfile?.email === null) {
    }
    const modal = modalAlert();
    modal.render({
      children: ModalDecision({
        question:
          userProfile?.email === null
            ? 'ARE YOU SURE YOU WANT TO DELETE YOUR USER?'
            : 'ARE YOU SURE YOU WANT TO LOGOUT?',
        onClick(bool) {
          if (bool) {
            dispatch(authDispatch.logoutDispatch());
            onChangeState({ page: 'landing' });
            modal.destroy();
          } else {
            modal.destroy();
          }
        }
      }),
      closeable: false
    });
    // dispatch(authDispatch.logoutDispatch());
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

  const [listCharacter, setListCharacter] = useState<string[]>([
    '/character/player/Character1.png',
    '/character/player/Character2.png',
    '/character/player/Character3.png',
    '/character/player/Character4.png',
    '/character/player/Character5.png',
    '/character/player/Character6.png',
    '/character/player/Character7.png',
    '/character/player/Character8.png',
    '/character/player/Character9.png',
    '/character/player/Character10.png',
    '/character/player/Character11.png',
    '/character/player/Character12.png'
  ]);
  const [currentCharacter, setCurrentCharacter] = useState<string>(
    listCharacter[0]
  );
  const [seletedCharacter, setSeletedCharacter] = useState<string>(
    localStorage.getItem('character') ?? '/character/player/Character1.png'
  );

  const handleChangeCharacter = (character: string) => {
    setCurrentCharacter(character);
  };
  const handleSelectCharacter = (character: string) => {
    setSeletedCharacter(character);
    localStorage.setItem('character', character);
  };

  return render({
    listCharacter: listCharacter,
    currentCharacter: currentCharacter,
    selectedCharacter: seletedCharacter,
    onChangeCharacter: handleChangeCharacter,
    onSelectCharacter: handleSelectCharacter,
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
    onCLickSettings: () => {
      onSetting();
    },
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
        image: getPublicPath('/decorations/MenuSinglePic.png'),
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
        modeDesc:
          'Join friends or challenge others in multiplayer mode! Compete in language exercises, and learn together in real-time. Sharpen your English skills while having fun with others. Ready to team up and master English together?',
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
        image: getPublicPath('/decorations/MenuMultiPic.png'),
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
