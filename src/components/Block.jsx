import { useState } from 'react';
import Label from './Label'
import '../styles.css'


// generates random color hex
const randColor = () => {
  return "#000000".replace(/0/g,() => (~~(Math.random()*16)).toString(16))
}

function Block() {
  const [color, setColor] = useState({bgColor: randColor(),})
  const [clicked, setClicked] = useState('Click Me!')

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