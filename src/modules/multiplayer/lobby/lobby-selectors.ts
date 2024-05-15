import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import { ILobby } from './lobby-services';

const lobbySelectors = (state: RootState) => state.multiplayer.lobby;

const lobbySelector = createSelector(lobbySelectors, (lobby): ILobby[] => {
  return lobby.lobby;
});

const isLoadingLobbySelector = createSelector(lobbySelectors, (lobby) => {
  return lobby.isLobbyLoading;
});

export default {
  lobbySelectors,
  lobbySelector,
  isLoadingLobbySelector
};
