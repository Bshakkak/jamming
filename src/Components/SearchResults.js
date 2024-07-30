import { useState, useEffect } from "react";
import styles from '../ComponentsCss/SearchResults.module.css';
import Track from "./Track";
import filterData from "../HelperFunctions/FilterData";

// const mockData = [
//     {id: "id0", song: "song0", artist:"artist0", album: 'album0'},
//     {id: "id1", song: "song1", artist:"artist1", album: 'album1'},
//     {id: "id2", song: "song2", artist:"artist2", album: 'album2'},
//     {id: "id3", song: "song3", artist:"artist3", album: 'album3'},
//     {id: "id4", song: "song4", artist:"artist4", album: 'album4'},
//     {id: "id5", song: "song5", artist:"artist5", album: 'album5'},
// ];

function SearchResults({tracks = {}}){
    const [receivedData, setReceivedData] = useState([]);
    
    useEffect(()=>{
        setReceivedData(filterData(tracks))
    },[tracks])

    // useEffect(()=>{
    //     let call = setTimeout(()=> {setReceivedData(mockData)}, 1000);
    //     return ()=>{
    //         clearTimeout(call)
    //     }
    // },[]);

    return(
        <>
            <div className={styles.searchRSec}>
                <div className={styles.searchIn}>
                    <span className={styles.titleSpan}>Results</span>
                    {receivedData.map(data => <Track key={`result_${data.id}`} {...data}/>)}
                </div>
            </div>
        </>
    );
};

export default SearchResults;