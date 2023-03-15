import { useState } from 'react';

export function Counter(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(oldState => oldState + 1);
  }

  const onDecrement = () => {
    setCount(oldState => oldState - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: <strong>{count}</strong></p>
      <button onClick={onClick}>
        Increments
      </button>
      <button onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
}