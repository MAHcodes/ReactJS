import { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const decrementCounter = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default State;
