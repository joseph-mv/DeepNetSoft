// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../redux/reducers/menuReducer'


export const store = configureStore({
  reducer: {
    menus: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
