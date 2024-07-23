import './App.css';
import Starfield from 'react-starfield';
import SearchBar from './Components/SearchBar';


function App() {
  return (
    <>
    <div className='mainApp'>
    <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <header>
        <h1 className='logoFont'>Jamming</h1>
      </header>
      <SearchBar />
    </div>
    </>
  );
}

export default App;
