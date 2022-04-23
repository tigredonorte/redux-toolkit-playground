import { Action, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import store, { RootState } from '.';

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<any>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
