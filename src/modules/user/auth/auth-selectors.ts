import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { TGameHistory } from './type';

const authSelector = (state: RootState) => state.user.auth;

const isGuestLoginLoadingSelector = createSelector(authSelector, (auth) => {
  return auth.isGuestLoginLoading;
});
const isLogoutLoading = createSelector(authSelector, (auth) => {
  return auth.isLogoutLoading;
});
export default {
  authSelector,
  isGuestLoginLoadingSelector,
  isLogoutLoading
};
