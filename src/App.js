import React from 'react';
import logo from './logo.svg';
import Block from './components/block'
import Swatch from './components/swatch'

function App() {

  function random() {
    return '#' +  Math.floor(Math.random()*16777215).toString(16);
  }

  return (
    <div className="wrapper" style={{backgroundColor: random() }}>

      <div className="swatch">
      <p className="instruct">Click the Colors You Don't Like</p>
        <Swatch />
        <Swatch />
      </div>
    </div>
  );
}

export default App;
