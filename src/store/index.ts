import { configureStore } from '@reduxjs/toolkit';
import webSocketReducer from '@/modules/test';
import gamePlayReducer from '@/modules/gameplay';
import gameModeReducer from '@/modules/gamemode';
import coreReducer from '@/modules/core';
import userCoreReducer from '@/modules/user';
const store = configureStore({
  reducer: {
    //
    webSocket: webSocketReducer,
    gameplay: gamePlayReducer,
    gamemode: gameModeReducer,
    core: coreReducer,
    user: userCoreReducer
  },
  devTools: true
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
