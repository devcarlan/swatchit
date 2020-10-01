import React, { useState } from 'react'

class Blocks extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       bg: this.random(),
     }
  }

  random() {
    return '#' +  Math.floor(Math.random()*16777215).toString(16);
  }

  handleClick() {
    this.setState({
      bg: this.random(),
    })
  }

  render() {
    return (
      <div className="block" style={{ backgroundColor: this.state.bg }} onClick={() => this.handleClick()}>
        <p style={{textAlign: 'center', backgroundColor: '#FFF', borderRadius: '1.5em 1.5em 0 0', margin: '0'}}>{this.state.bg}</p>
      </div>
    )
  }
}

export default Blocks;
