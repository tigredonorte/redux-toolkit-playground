import { configureStore } from '@reduxjs/toolkit';

import stock from './Stock.store';

const store = configureStore({
  reducer: {
    stock,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
