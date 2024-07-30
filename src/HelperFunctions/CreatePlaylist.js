

async function createPlaylist(token, spotifyID, playlist){
    if(!playlist){
        console.log("playlist name is empty");
        return null;
    }
    let result;
    const playlistEndpoint = `https://api.spotify.com/v1/users/${spotifyID}/playlists`;
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' 
    };
    const data = {
        name: playlist,
        description: `${playlist} created with Jamming@B_shk`,
        public: false
    };
    try{
        const response = await fetch(playlistEndpoint,{
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        });
        if(!response.ok){ 
            const errorDetails = await response.json();
            throw new Error(`HTTP error in playlist: ${response.status}, ${errorDetails.error.message}`)
        }
        result = await response.json();
        return result.id;
    }catch(e){
        console.log("Error creating playlist", e)
    }
}

export default createPlaylist