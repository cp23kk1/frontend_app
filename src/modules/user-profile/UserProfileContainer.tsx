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
import { TUserProfile } from '@/components/modules/V2/profile/UserProfile/type';
import dayjs, { Dayjs } from 'dayjs';
import userCoreDispatch from '../user/user-core/user-core-dispatch';

const UserProfileContainer = ({
  render,
  onChangeState,
  state
}: {
  render: (props: TUserProfile) => ReactNode;
  onChangeState: (input: TState) => void;
  state: TState;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userProfile = useAppSelector(userCoreSelectors.userProfileSelector);
  const [mode, setMode] = useState<'account' | 'stats'>('account');
  const handleChangeMode = (input: 'account' | 'stats') => {
    setMode(input);
  };
  const handleClickLogout = () => {
    dispatch(authDispatch.logoutDispatch());
  };
  const handleClickBack = () => {
    onChangeState({
      page: state.listPage?.[state.listPage.length - 2] ?? 'user-profile'
    });
  };
  const handleClickSetting = () => {};

  useEffect(() => {
    dispatch(userCoreDispatch.getUserProfileDispatch());
  }, []);

  return render({
    mode: mode,
    onChangeMode: handleChangeMode,
    onClickBack: handleClickBack,
    onClickSetting: handleClickSetting,
    account: {
      since: `Member since ${dayjs(userProfile?.createAt).format(
        'MMM, D YYYY'
      )}`,
      displayName: userProfile?.displayName ?? '',
      email: userProfile?.email ?? '',
      profilePic: userProfile?.image ?? '',
      onSingOut: handleClickLogout
    },
    stats: {
      barStats: [
        {
          maxScore: '1000',
          score: '750',
          progress: '75',
          title: 'Noun'
        },
        {
          maxScore: '1000',
          score: '750',
          progress: '45',
          title: 'Noun'
        },
        {
          maxScore: '1000',
          score: '750',
          progress: '75',
          title: 'Noun'
        },
        {
          maxScore: '1000',
          score: '750',
          progress: '11',
          title: 'Noun'
        },
        {
          maxScore: '1000',
          score: '750',
          progress: '75',
          title: 'Noun'
        },
        {
          maxScore: '1000',
          score: '750',
          progress: '75',
          title: 'Noun'
        },
        {
          maxScore: '1000',
          score: '750',
          progress: '75',
          title: 'Noun'
        },
        {
          maxScore: '1000',
          score: '750',
          progress: '75',
          title: 'Noun'
        },
        {
          maxScore: '1000',
          score: '750',
          progress: '75',
          title: 'Noun'
        },
        {
          maxScore: '1000',
          score: '750',
          progress: '75',
          title: 'Noun'
        }
      ],
      overAllAcc: '10',
      overAllMaxScore: '1000',
      overAllScore: '750',
      vocabularyAcc: '75',
      vocabularyMaxScore: '1000',
      vocabularyScore: '750',
      passageAcc: '29',
      passageMaxScore: '1000',
      passageScore: '750',
      sentenceAcc: '75',
      sentenceMaxScore: '1000',
      sentenceScore: '750'
    }
  });
};
export default UserProfileContainer;
