import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

export const webSocketSelector = (state: RootState) =>
  state.webSocket.webSocket;

export const webSocketLobbySelector = createSelector(
  webSocketSelector,
  (webSocket) => {
    return webSocket.lobby;
  }
);
export const isLoadingLobbySelector = createSelector(
  webSocketSelector,
  (webSocket) => {
    return webSocket.isLobbyLoading;
  }
);
export const isConnectSelector = createSelector(
  webSocketSelector,
  (webSocket) => {
    return webSocket.isConnect;
  }
);
export default {
  webSocketSelector,
  webSocketLobbySelector,
  isLoadingLobbySelector,
  isConnectSelector
};
