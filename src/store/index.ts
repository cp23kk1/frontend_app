import { configureStore } from '@reduxjs/toolkit';
import webSocketReducer from '@/modules/test';
const store = configureStore({
  reducer: {
    //reducer
    webSocket: webSocketReducer
  },
  devTools: true
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
