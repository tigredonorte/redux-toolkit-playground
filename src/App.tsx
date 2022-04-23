import './App.css';

import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from './store';
import { asyncDecrement, asyncIncrement, decrement, increment } from './store/Stock.store';
import { useAppDispatch } from './store/store.type';

function App() {
  const dispatch = useAppDispatch();
  const counter = useSelector((state: RootState) => state.stock.counter);
  const inc = () => dispatch(increment(2));
  const dec = () => dispatch(decrement(3));

  const asyncInc = () => dispatch(asyncIncrement(Math.round(Math.random() * 10)));
  const asyncDec = () => dispatch(asyncDecrement(Math.round(Math.random() * 10)));
  return (
      <div>
        <button onClick={dec}>-</button>
        <span>{counter}</span>
        <button onClick={inc}>+</button>

        <br/>
        
        <button onClick={asyncDec}>-</button>
        <span>{counter}</span>
        <button onClick={asyncInc}>+</button>
      </div>
  );
}

export default App;
