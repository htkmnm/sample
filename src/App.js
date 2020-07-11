import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increment}>いいね！</button>
      <button onClick={decrement}>よくないね！</button>
      {count}
    </div>
  );
}

export default App;
