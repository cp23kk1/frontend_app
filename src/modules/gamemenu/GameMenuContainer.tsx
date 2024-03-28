import { ReactNode, useEffect, useState } from 'react';
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
import { TModal } from '../core/setting/type';
import authDispatch from '../user/auth/auth-dispatch';

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
  const isLogoutLoading = useAppSelector(authSelectors.isLogoutLoading);
  const isUserProfileLoading = useAppSelector(
    userCoreSelectors.isUserProfileLoadingSelector
  );
  const bestScore = useAppSelector(scoreSelectors.bestScoreSelector);

  const [currentPage, setCurrentPage] = useState<
    'home' | 'leaderboard' | 'history' | 'item'
  >('home');
  const handleChangeCurrentPage = (
    input: 'home' | 'leaderboard' | 'history' | 'item'
  ) => {
    setCurrentPage(input);
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
      })
    });
  };
  const onGoogleLogin = () => {
    router.push(getGoogleUrl(router.pathname));
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

  const onClickLogout = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    dispatch(authDispatch.logoutDispatch());
  };

  const onClickProfile = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
  };
  useEffect(() => {
    dispatch(scoreDispatch.getLeaderBoardDispatch());
    dispatch(scoreDispatch.getBestScoreDispatch());
    localStorage.setItem('currentState', '');
  }, [isUserProfileLoading, userProfile]);

  return render({
    currentPage: currentPage,
    onChangePage: handleChangeCurrentPage,
    onCLickSettings: () => {},
    onClickSignIn: onLogin,
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
        modeExtraInfo: 'I HAVE A CODE',
        modeButtons: [
          { iconName: 'Play', onClick: () => {}, text: 'PLAY QUICKLY' },
          {
            iconName: 'Group',
            onClick: () => {
              onChangeState({ page: 'host-lobby' });
            },
            text: 'CREATE A GAME'
          }
        ]
      }
    ]
  });
};
export default GameMenuContainer;
