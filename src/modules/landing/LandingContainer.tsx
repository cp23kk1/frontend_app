import { ReactNode, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';
import { actions as modalActions } from '../core/setting';
import { TState } from '../core/VocaverseCoreContainer';
import { TLandingContainer } from './type';
import { getGoogleUrl } from '@/utils/getGoogleUrl';
import authDispatch from '../user/auth/auth-dispatch';
import LoginModal from '@/components/modules/landing/LoginModal';
import { modalAlert } from '@/components/common/Modal';

export const LandingContainer = ({
  render,
  onChangeState
}: {
  render: (props: TLandingContainer) => ReactNode;
  onChangeState: (input: TState) => void;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onLogin = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    const modal = modalAlert();

    modal.render({
      children: LoginModal({
        onClickGoogleLogin: onGoogleLogin,
        onClickGuestLogin: onGuestLogin,
        onClickPolicy: () => {},
        onClickTerm: () => {}
      })
    });
  };

  const onBegin = () => {
    onChangeState({ page: 'gamemode' });
  };
  const onGoogleLogin = () => {
    router.push(getGoogleUrl(router.pathname));
  };
  const onGuestLogin = () => {
    dispatch(authDispatch.guestLoginDispatch());
  };

  return render({
    onLogin,
    onBegin
  });
};
export default LandingContainer;
