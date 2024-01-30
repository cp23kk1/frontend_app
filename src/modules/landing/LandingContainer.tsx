import { ReactNode, useState } from 'react';
import { useAppDispatch } from '@/hooks';

import { useRouter } from 'next/router';
import { actions as modalActions } from '../core/modal';
import { TState } from '../core/VocaverseCoreContainer';
import { ILandingContainer } from './type';
import { getGoogleUrl } from '@/utils/getGoogleUrl';
import authDispatch from '../user/auth/auth-dispatch';

export const LandingContainer = ({
  render,
  onChangeState
}: {
  render: (props: ILandingContainer) => ReactNode;
  onChangeState: (input: TState) => void;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const _handleSetModalLogin = (bool: boolean) => {
    setIsModalLoginOpen(bool);
  };
  const onCloseModal = (event?: React.MouseEvent<HTMLButtonElement>) => {
    _handleSetModalLogin(false);
  };
  const onLogin = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    _handleSetModalLogin(true);
  };
  const onSetting = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    dispatch(modalActions.onOpen('SettingMenu'));
  };
  const onBegin = () => {
    // router.push(getPublicPathPageRounting('/gameplay'));
    onChangeState('gameplay');
  };
  const onGoogleLogin = () => {
    // const a = document.createElement('a');
    // a.href = getGoogleUrl(router.pathname);
    // a.click();
    router.push(getGoogleUrl(router.pathname));
  };
  const onGuestLogin = () => {
    dispatch(authDispatch.guestLoginDispatch());
  };

  return render({
    onLogin,
    onSetting,
    onBegin,
    onCloseModal,
    onGoogleLogin,
    onGuestLogin,
    isModalLoginOpen
  });
};
export default LandingContainer;
