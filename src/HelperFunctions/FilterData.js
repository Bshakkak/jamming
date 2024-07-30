
function filterData(data){
    if(Object.keys(data).length === 0) return [];
    const items = data["tracks"]["items"];
    const passData = items.map(item => ({
        id: item.id,
        song: item.name,
        artist: item.album.artists.map(artist => artist.name).join(", "),
        album: item.album.name
    }));
    return passData;
}

export default filterData