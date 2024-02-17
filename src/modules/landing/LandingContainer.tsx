import { ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';
import { actions as modalActions } from '../core/setting';
import { TState } from '../core/VocaverseCoreContainer';
import { TLandingContainer } from './type';
import { getGoogleUrl } from '@/utils/getGoogleUrl';
import authDispatch from '../user/auth/auth-dispatch';
import LoginModal from '@/components/modules/landing/LoginModal';
import { modalAlert } from '@/components/common/Modal';
import userCoreDispatch from '../user/user-core/user-core-dispatch';
import userCoreSelectors from '../user/user-core/user-core-selectors';
import { TModal } from '../core/setting/type';

export const LandingContainer = ({
  render,
  onChangeState
}: {
  render: (props: TLandingContainer) => ReactNode;
  onChangeState: (input: TState) => void;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userProfile = useAppSelector(userCoreSelectors.userProfileSelector);
  const isUserProfileLoading = useAppSelector(
    userCoreSelectors.isUserProfileLoadingSelector
  );
  const onLogin = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    const modal = modalAlert();

    modal.render({
      children: LoginModal({
        onClickGoogleLogin: onGoogleLogin,
        onClickGuestLogin: onGuestLogin(modal),
        onClickPolicy: () => {},
        onClickTerm: () => {}
      })
    });
  };

  const onBegin = () => {
    if (userProfile?.displayName) {
      onChangeState({ page: 'gamemode' });
    } else {
    }
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

  useEffect(() => {
    dispatch(userCoreDispatch.getUserProfileDispatch());
  }, []);

  return render({
    onLogin,
    onBegin,
    userProfile: {
      displayName: userProfile?.displayName,
      image: userProfile?.image
    }
  });
};
export default LandingContainer;
