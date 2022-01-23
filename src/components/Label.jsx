import '../styles.css'

function Label( { text }) {
  return (
    <p className='color-text' onClick={() => {navigator.clipboard.writeText(text)}} style={{textAlign: 'center', backgroundColor: '#fff', padding: '.5em', margin: '0'}}>{text}</p>
  )
}

export default Label