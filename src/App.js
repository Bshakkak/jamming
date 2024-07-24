import './App.css';
import Starfield from 'react-starfield';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';

function App() {
  return (
    <>
    <main className='mainApp'>
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
      <div className='listResults'>
        <section className='searchResults'>
          <SearchResults />
        </section>
        <section className='playlist'>
          <Playlist />
        </section>
      </div>
    </main>
    </>
  );
}

export default App;
