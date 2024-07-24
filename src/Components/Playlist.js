import { useState } from "react";
import Button from "./Button";
import styles from '../ComponentsCss/Playlist.module.css';
import Track from "./Track";

const mockData = [
    {id: "id0", song: "song0", artist:"artist0", album: 'album0'},
    {id: "id1", song: "song1", artist:"artist1", album: 'album1'},
    {id: "id2", song: "song2", artist:"artist2", album: 'album2'},
    {id: "id3", song: "song3", artist:"artist3", album: 'album3'},
    {id: "id4", song: "song4", artist:"artist4", album: 'album4'},
    {id: "id5", song: "song5", artist:"artist5", album: 'album5'},
];

function Playlist(){
    const [playlist, setPlaylist] = useState('');
    const handleChange = ({target}) =>{
        setPlaylist(target.value)
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert('song added to playlist!')
    };
    return(
        <>
            <form className={styles.playlistContainer} onSubmit={handleSubmit}>
                <div className={styles.playlistIn}>
                    <input type="text" name="playlistname" id="playlistname" value={playlist} 
                    onChange={handleChange} className={styles.inputList}/>
                    {mockData.map(data => <Track key={`play_${data.id}`} {...data}/>)}
                    <Button type="submit" text="Save to Spotify" style={{margin: "0.5rem auto"}} 
                    bclass="btn2"/>
                </div> 
            </form>
        </>
    );
};

export default Playlist;