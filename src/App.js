import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  }

  const decrement = () => {
    setCount(count - 1);
    console.log(count);
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
