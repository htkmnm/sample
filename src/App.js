import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState("hatsuki");

  const increment = () => {
    setCount(count + "hatsuki");
    console.log(count);
  }

  return (
    <div>
      <button onClick={increment}>add</button>
      {count}
    </div>
  );
}

export default App;
