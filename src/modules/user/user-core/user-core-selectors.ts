import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { IUserResponse } from './user-core-services';

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
export default {
  userCoreSelector,
  userProfileSelector,
  isUserProfileLoadingSelector
};
