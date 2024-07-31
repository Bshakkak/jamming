
async function findPlaylist(token, playlist, spotifyID){
    let result;
    const getPlaylistEndpoint = `https://api.spotify.com/v1/users/${spotifyID}/playlists`;
    const headers = {
        Authorization: `Bearer ${token}`
    };
    try{
        const response = await fetch(getPlaylistEndpoint,{
            method: "GET",
            headers: headers
        })
        if(!response.ok){
            const errorDetails = await response.json()
            throw new Error(`HTTP error in playlist: ${response.status}, ${errorDetails.error.message}`)
        }
        result = await response.json()
        result = result.items.map(item => ({name: item.name, id: item.id}))
        return result.filter(item => item.name.toLowerCase() === playlist)
    }catch(e){
        console.log("Error in fetching playlist", e)
    }
}

export default findPlaylist;