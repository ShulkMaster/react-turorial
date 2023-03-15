import { useState } from 'react';

export type CounterProps = {
  onCountChange: (count: number) => void;
}

export function Counter(props: CounterProps): JSX.Element {
  const [count, setCount] = useState(1);

  const onClick = () => {
    setCount(oldState => oldState + 1);
    props.onCountChange(count + 1);
  }

  const onDecrement = () => {
    setCount(oldState => oldState - 1);
    props.onCountChange(count - 1);
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