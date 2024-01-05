import { ReactNode } from 'react';
import { useAppDispatch } from '@/hooks';

import { useRouter } from 'next/router';
import { actions as modalActions } from '../core/modal';
import { TLanding } from '@/components/modules/landing/Landing/type';
import { getPublicPathPageRounting } from '@/utils/basePath';
import { TState } from '../core/VocaverseCoreContainer';

export const LandingContainer = ({
  render,
  onChangeState
}: {
  render: (props: TLanding) => ReactNode;
  onChangeState: (input: TState) => void;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onLogin = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    dispatch(modalActions.onOpen('LoginMenu'));
  };
  const onSetting = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();

    dispatch(modalActions.onOpen('SettingMenu'));
  };
  const onBegin = () => {
    // router.push(getPublicPathPageRounting('/gameplay'));
    onChangeState('gameplay');
  };

  return render({
    onLogin,
    onSetting,
    onBegin
  });
};
export default LandingContainer;
