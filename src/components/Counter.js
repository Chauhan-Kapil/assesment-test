import React from "react";

const IncrementButton = ({ onIncrement }) => {
  return <button onClick={onIncrement}>+</button>;
};

const DecrementButton = ({ onDecrement }) => {
  return <button onClick={onDecrement}>-</button>;
};

const CounterDisplay = ({ value }) => {
  return <span>{value}</span>;
};

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <DecrementButton onDecrement={onDecrement} />
      <CounterDisplay value={value} />
      <IncrementButton onIncrement={onIncrement} />
    </div>
  );
};

export default Counter;
