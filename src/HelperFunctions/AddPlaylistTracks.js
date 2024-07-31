
async function addPlaylistTracks(token, playlistID, playlistItems){
    let result;
    const addEndpoint = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;
    // console.log(playlistItems);
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' 
    };
    const data = {
        uris : playlistItems.map(item => `spotify:track:${item.id}`.toString()),
    };
    // console.log(data)
    try{
        const response = await fetch(addEndpoint,{
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        });
        if(!response.ok){ 
            const errorDetails = await response.json();
            throw new Error(`HTTP error in playlist: ${response.status}, ${errorDetails.error.message}`)
        }
        result = await response.json();
        return result;
    }catch(e){
        console.log("Error adding to playlist", e)
    }
};

export default addPlaylistTracks