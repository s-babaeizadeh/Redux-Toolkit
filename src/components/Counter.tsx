import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from './CounterSlice';

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleIncrementAsync = () => {
    dispatch(incrementAsync(10));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(15));
  };

  return (
    <div>
      <h2>{count}</h2>
      <div className="button-container">
        <div className="column">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleIncrementAsync}>
            IncrementUsingAsyncThunk
          </button>
        </div>
        <div className="column">
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleIncrementByAmount}>IncrementByAmount</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
