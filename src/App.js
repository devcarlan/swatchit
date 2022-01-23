import './App.css';
import Swatch from './components/Swatch'

function App() {
  return (
    <div className="App">
      <div className='text-wrap'>
      <h1>Swatch It!</h1>
      <p>Click on a tile to change it's color.</p>
      <p>Click on the label above a tile to copy it's hexadecimal value.</p>
      </div>
      <div className='swatch-wrap'>
        <Swatch />
      </div>
    </div>
  );
}

export default App;
