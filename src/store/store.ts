import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import contactsSlice from './slices/contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    userSlice,
    contactsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);