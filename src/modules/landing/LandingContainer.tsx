import { ReactNode, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { useRouter } from 'next/router';
import { actions as modalActions } from '../core/setting';
import { TState } from '../core/VocaverseCoreContainer';
import { ILandingContainer } from './type';
import { getGoogleUrl } from '@/utils/getGoogleUrl';
import authDispatch from '../user/auth/auth-dispatch';
import { getPublicPath } from '@/utils/basePath';
import settingSelectors from '../core/setting/setting-selectors';

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
  const [isModalSettingOpen, setIsModalSettingOpen] = useState<boolean>(false);
  const _handleSetModalLogin = (bool: boolean) => {
    setIsModalLoginOpen(bool);
  };

  const volume = useAppSelector(settingSelectors.volumeSelector);
  const music = useAppSelector(settingSelectors.musicSelector);
  const soundEffect = useAppSelector(settingSelectors.soundEffectSelector);

  const onCloseModal = (event?: React.MouseEvent<HTMLButtonElement>) => {
    _handleSetModalLogin(false);
  };
  const onLogin = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    _handleSetModalLogin(true);
  };
  const onSetting = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    setIsModalSettingOpen(true);
    // dispatch(modalActions.onOpen('SettingMenu'));
  };
  const onCloseModalSetting = () => {
    setIsModalSettingOpen(false);
  };
  const onBegin = () => {
    // router.push(getPublicPathPageRounting('/gameplay'));
    onChangeState({ page: 'gamemode' });
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
    isModalLoginOpen,
    settingModal: {
      charaterPic: getPublicPath(`/character/player/robot.svg`),
      isModalOpen: isModalSettingOpen,
      onClose: onCloseModalSetting,
      musicValue: music,
      volumeValue: volume,
      soundEffectValue: soundEffect,
      onClickChangeButton: () => {}
    }
  });
};
export default LandingContainer;
