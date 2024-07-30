import { useEffect, useState } from "react";
import Button from "./Button";
import styles from '../ComponentsCss/Playlist.module.css';
import Track from "./Track";
import requestId from "../HelperFunctions/RequestID";
import createPlaylist from "../HelperFunctions/CreatePlaylist";
import addPlaylistTracks from "../HelperFunctions/AddPlaylistTracks";

// const mockData = [
//     {id: "id0", song: "song0", artist:"artist0", album: 'album0'},
//     {id: "id1", song: "song1", artist:"artist1", album: 'album1'},
//     {id: "id2", song: "song2", artist:"artist2", album: 'album2'},
//     {id: "id3", song: "song3", artist:"artist3", album: 'album3'},
//     {id: "id4", song: "song4", artist:"artist4", album: 'album4'},
//     {id: "id5", song: "song5", artist:"artist5", album: 'album5'},
// ];

function Playlist({tracks = [], filterData = (data) => data, token}){
    const [playlist, setPlaylist] = useState('');
    const [playlistItems, setPlaylistItems] = useState([]);

    useEffect(()=>{
        setPlaylistItems(tracks)
    },[tracks])
    
    const handleChange = ({target}) =>{
        setPlaylist(target.value)
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            let spotifyID = await requestId(token);
            let playlistID = await createPlaylist(token, spotifyID, playlist);
            await addPlaylistTracks(token, playlistID, playlistItems);
        }catch(e){
            console.log("Error ", e)
        }
    };
    return(
        <>
            <form className={styles.playlistContainer} onSubmit={handleSubmit}>
                <div className={styles.playlistIn}>
                    <input type="text" name="playlistname" id="playlistname" value={playlist} 
                    onChange={handleChange} className={styles.inputList}/>
                    {playlistItems.map(data => <Track key={`play_${data.id}`} {...data} symbol="-" filterData={filterData} 
                    btnType="btnAdd2"/>)}
                    <Button type="submit" text="Save to Spotify" style={{margin: "0.5rem auto"}} 
                    bclass="btn2"/>
                </div> 
            </form>
        </>
    );
};

export default Playlist;