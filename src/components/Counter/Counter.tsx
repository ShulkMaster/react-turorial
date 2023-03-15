import { useState } from 'react';

export function Counter(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}