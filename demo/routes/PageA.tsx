import { useState } from 'react';

function PageA() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>PageA</h1>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
}

export default PageA;
