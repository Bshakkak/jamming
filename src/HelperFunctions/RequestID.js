
async function requestId(token){
    let spotifyID;
    const spotifyIDEnd = "https://api.spotify.com/v1/me";
    const headers = {
        Authorization: `Bearer ${token}`
    };
    try{
        const response = await fetch(spotifyIDEnd, {
            method: "GET",
            headers: headers
        });
        if(!response.ok) throw new Error('HTTP Error')
        spotifyID = await response.json()
        return spotifyID.id
    }catch(e){
        console.log("Error fetching client id", e);
    }
}

export default requestId;