import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "./store.type";

const stock = createSlice({
  name: "stock",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.counter -= action?.payload;
    },
  },
});

export const { increment, decrement } = stock.actions;
export default stock.reducer;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function asyncIncrement(num: number): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep(Math.random() * 10000 + 1000);
    dispatch(increment(num));
  } as AppThunk;
}

export function asyncDecrement(num: number): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep(Math.random() * 10000 + 1000);
    dispatch(decrement(num));
  } as AppThunk;
}
