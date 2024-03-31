import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { IUserResponse, IUserStatistic } from './user-core-services';

const userCoreSelector = (state: RootState) => state.user.userCore;

const userProfileSelector = createSelector(
  userCoreSelector,
  (user): IUserResponse | undefined => {
    return user.userProfile;
  }
);
const isUserProfileLoadingSelector = createSelector(
  userCoreSelector,
  (user) => {
    return user.isUserProfileLoading;
  }
);

const userStatisticSelector = createSelector(
  userCoreSelector,
  (user): IUserStatistic | undefined => {
    return user.userStatistic;
  }
);
const isUserStatisticLoadingSelector = createSelector(
  userCoreSelector,
  (user) => {
    return user.isUserStatisticLoading;
  }
);
export default {
  userCoreSelector,
  userProfileSelector,
  isUserProfileLoadingSelector,
  userStatisticSelector,
  isUserStatisticLoadingSelector
};
