import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter';
import tokenReducer from './slice/token';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
