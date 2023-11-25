import { configureStore } from '@reduxjs/toolkit';
import webSocketReducer from '@/modules/test';
import gamePlayReducer from '@/modules/gameplay';
const store = configureStore({
  reducer: {
    //
    webSocket: webSocketReducer,
    gameplay: gamePlayReducer
  },
  devTools: true
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
