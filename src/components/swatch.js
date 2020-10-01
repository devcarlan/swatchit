import React from 'react'
import Blocks from './blocks'

function Swatch() {

  function random() {
    return '#' +  Math.floor(Math.random()*16777215).toString(16);
  }

  return (
    <ul className="list">
      <li><Blocks /></li>
      <li><Blocks /></li>
      <li><Blocks /></li>
    </ul>
  )
}

export default Swatch;
