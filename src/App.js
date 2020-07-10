import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          <button onClick={()=>{window.alert("Hello World")}}>Hello World</button>
        </p>
      
      </header>
    </div>
  );
}

export default App;
