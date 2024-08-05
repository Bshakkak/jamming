import './App.css';
import { useState, useEffect } from 'react';
import Starfield from 'react-starfield';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';
import Button from './Components/Button';

function App() {
  const [token, setToken] = useState(()=> {
    let prevTime = Number(window.localStorage.getItem("timestamp"))
    if ((Number(Date.now()) - prevTime) >= 3600000){
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("timestamp");
      return "";
    }
    return window.localStorage.getItem("accessToken");
  });
  const [trackData, setTrackData] = useState({});
  const [displayedTracks, setDisplayedTracks] = useState([]);

  const CLIENT_ID = "a41cf333acf74a14b7648809d14633b9";
  const REDIRECT_URI = "https://jammingbshkooo.netlify.app/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPE = "playlist-modify-private playlist-modify-public playlist-read-private playlist-read-collaborative";
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;  
  ;}
  const handleLogout = () =>{
    setToken("");
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("timestamp");
  };

  useEffect(()=>{
    const hash = window.location.hash;
    let token = window.localStorage.getItem("accessToken");
    let timeStamp = window.localStorage.getItem("timestamp");
    if(!token && hash){
      token = hash.substring(1).split('&')[0].split('=')[1];
      window.location.hash="";
      window.localStorage.setItem("accessToken", token);
      setToken(token)
    };
    if(!timeStamp && hash){
      timeStamp = Date.now().toString();
      window.localStorage.setItem("timestamp", timeStamp);
    };
  },[token]);

  useEffect(()=>{
    const timeRunning = setTimeout(()=>{
      window.location.reload();
    }, 3600000);
    return () => clearTimeout(timeRunning)
  },[]);

  // useEffect(()=>{
  //   console.log(trackData)
  // },[trackData]);

  if(!token) return(
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
      <form className='mainAppLogin' onSubmit={handleSubmit}>
        <span className='spanLogin'>Create your Spotify playlist!</span>
        <Button type="submit" text="Login" bclass="btn"/>
      </form>
      </main>
    </>
  );
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
      <SearchBar token={token} setTrackData={data => setTrackData(data)}/>
      <div className='listResults'>
        <section className='searchResults'>
          <SearchResults tracks={trackData} displayedTracks={data => setDisplayedTracks([...displayedTracks, data])}/>
        </section>
        <section className='playlist'>
          <Playlist tracks={displayedTracks} token={token} filterData={data => setDisplayedTracks(displayedTracks.filter(item => item.id !== data.id))}/>
        </section>
      </div>
      <footer>
        <Button type="submit" text="Logout" bclass="btn3" onClick={handleLogout}/>
      </footer>
    </main>
    </>
  );
}

export default App;
