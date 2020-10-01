import React, { useState } from 'react'

function Block() {

  function random() {
    return '#' +  Math.floor(Math.random()*16777215).toString(16);
  }

  //let randomness;

  //function componentDidMount() {
  //  randomness = setInterval(random(), 1000);
  //}

//  function componentWillUnmount() {
//    clearInterval(randomness);
//  }

  const [state, setState] = useState({
    color: random()
  });

  function handleClick() {
    setState(() => {
      color: random()
    })
  }

  return (
    <div className="block" style={{ backgroundColor: state.color }} onClick={() => handleClick()}>
      <p style={{textAlign: 'center', backgroundColor: '#FFF', borderRadius: '1.5em 1.5em 0 0'}}>{state.color}</p>
    </div>
  )
}

export default Block;
