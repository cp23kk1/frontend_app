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
import ErrorModal from '@/components/common/Modal/ModalError';

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
  const userStatistic = useAppSelector(userCoreSelectors.userStatisticSelector);
  const isUpdateUserDisplayNameLoading = useAppSelector(
    userCoreSelectors.isUpdateDisplayNameLoadingSelector
  );

  const [mode, setMode] = useState<'account' | 'stats'>('account');
  const handleChangeMode = (input: 'account' | 'stats') => {
    setMode(input);
  };

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const [editedDisplayName, setEditedDisplayName] = useState<string>(
    userProfile?.displayName || ''
  );

  const handleChangeIsEditMode = () => {
    setEditedDisplayName(userProfile?.displayName || '');
    setIsEditMode(!isEditMode);
  };
  const handleConfirmEdit = () => {
    dispatch(
      userCoreDispatch.updateUserDisplayNameDispatch({
        newDisplayName: editedDisplayName
      })
    );
    handleChangeIsEditMode();
  };

  const handleChangeDisplayNamme = (
    input: React.FormEvent<HTMLInputElement>
  ) => {
    setEditedDisplayName(input.currentTarget.value);
  };
  const handleClickLogout = () => {
    dispatch(authDispatch.logoutDispatch());
    onChangeState({ page: 'landing' });
  };
  const handleClickBack = () => {
    onChangeState({
      page: state.listPage?.[state.listPage.length - 2] ?? 'user-profile'
    });
  };
  const handleClickSetting = () => {};

  useEffect(() => {
    if (!isUpdateUserDisplayNameLoading) {
      dispatch(userCoreDispatch.getUserProfileDispatch());
      dispatch(userCoreDispatch.getUserStatisticDispatch());
    }
  }, [isUpdateUserDisplayNameLoading]);

  return render({
    mode: mode,
    onChangeMode: handleChangeMode,
    onClickBack: handleClickBack,
    onClickSetting: handleClickSetting,
    account: {
      onConfirm: handleConfirmEdit,
      editedDisplayName: editedDisplayName,
      isEditMode: isEditMode,
      onChangeDisplayName: handleChangeDisplayNamme,
      since: `Member since ${dayjs(userProfile?.createAt).format(
        'MMM, D YYYY'
      )}`,
      displayName: userProfile?.displayName ?? '',
      email: userProfile?.email ?? '',
      profilePic: userProfile?.image ?? '',
      onSingOut: handleClickLogout,
      onChangeEditMode: handleChangeIsEditMode
    },
    stats: {
      barStats: userStatistic
        ? [
            ...userStatistic?.countVocabulary.map((maxVocab) => {
              let countCorrect = userStatistic?.countVocabularyCorrect.find(
                (value) => {
                  return maxVocab.pos == value.pos;
                }
              ) ?? { count: 0, pos: '' };
              return {
                maxScore: `${maxVocab.count}`,
                score: `${countCorrect?.count}`,
                progress: `${(
                  (countCorrect?.count / maxVocab.count) *
                  100
                ).toFixed(2)}`,
                title: maxVocab.pos
              };
            }),
            ...userStatistic?.countSentence.map((maxSentence) => {
              let countCorrect = userStatistic?.countSentenceCorrect.find(
                (value) => {
                  return maxSentence.tense == value.tense;
                }
              ) ?? { count: 0, tense: '' };
              return {
                maxScore: `${maxSentence.count}`,
                score: `${countCorrect?.count}`,
                progress: `${(
                  (countCorrect?.count / maxSentence.count) *
                  100
                ).toFixed(2)}`,
                title: maxSentence.tense
              };
            })
          ]
        : [],
      overAllAcc: `${(
        (userStatistic
          ? userStatistic.overallCorrect / userStatistic.overall
          : 0) * 100
      ).toFixed(2)}`,
      overAllMaxScore: `${userStatistic ? userStatistic.overall : 0}`,
      overAllScore: `${userStatistic ? userStatistic.overallCorrect : 0}`,
      vocabularyAcc: `${(
        (userStatistic
          ? userStatistic?.countVocabularyCorrect.reduce(
              (accumulator, currentValue) => accumulator + currentValue.count,
              0
            ) /
            userStatistic?.countVocabulary.reduce(
              (accumulator, currentValue) => accumulator + currentValue.count,
              0
            )
          : 0) * 100
      ).toFixed(2)}`,
      vocabularyMaxScore: `${
        userStatistic
          ? userStatistic?.countVocabulary.reduce(
              (accumulator, currentValue) => accumulator + currentValue.count,
              0
            )
          : 0
      }`,
      vocabularyScore: `${
        userStatistic
          ? userStatistic?.countVocabularyCorrect.reduce(
              (accumulator, currentValue) => accumulator + currentValue.count,
              0
            )
          : 0
      }`,
      passageAcc: `${
        userStatistic
          ? (
              (userStatistic?.countPassageCorrect /
                userStatistic?.countPassage) *
              100
            ).toFixed(2)
          : 0
      }`,
      passageMaxScore: `${userStatistic ? userStatistic.countPassage : 0}`,
      passageScore: `${userStatistic ? userStatistic.countPassageCorrect : 0}`,
      sentenceAcc: `${
        userStatistic
          ? (
              (userStatistic?.countSentenceCorrect.reduce(
                (accumulator, currentValue) => accumulator + currentValue.count,
                0
              ) /
                userStatistic?.countSentence.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.count,
                  0
                )) *
              100
            ).toFixed(2)
          : 0
      }`,
      sentenceMaxScore: `${
        userStatistic
          ? userStatistic?.countSentence.reduce(
              (accumulator, currentValue) => accumulator + currentValue.count,
              0
            )
          : 0
      }`,
      sentenceScore: `${
        userStatistic
          ? userStatistic?.countSentenceCorrect.reduce(
              (accumulator, currentValue) => accumulator + currentValue.count,
              0
            )
          : 0
      }`
    }
  });
};
export default UserProfileContainer;
