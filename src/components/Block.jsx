import { useState } from 'react';
import Label from './Label'
import '../styles.css'

function Block() {
  const [color, setColor] = useState({bgColor: '#fff',})
  const [clicked, setClicked] = useState('Click Me!')

  // generates random color hex
  const randColor = () => {
    return '#' +  Math.floor(Math.random()*16777215).toString(16)
  }

  // sets bgColor state of color to a random hexadecimal number
  // sets clicked state to empty string
  const handleClick = () => {
    setColor({
      bgColor: randColor(),
    })
    setClicked('')
  }

  return (
    <div className='block-wrapper'>
      <Label text={color.bgColor} />
      <div className='block' onClick={() => handleClick()} style={{backgroundColor: color.bgColor}}>
        <p style={{textAlign: 'center',}}>{clicked}</p>
      </div>
    </div>
  )
}

export default Block