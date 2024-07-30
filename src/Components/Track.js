import styles from '../ComponentsCss/Track.module.css';

function Track(props){
    const handleClick = () =>{
        if(props.symbol === "+"){
            let passData = {
                id: props.id,
                song: props.song,
                artist: props.artist,
                album: props.album
            }
            props.displayedTracks(passData)
        }
        else if(props.symbol === "-"){
            props.filterData({id: props.id})
        }
    }
    return(
        <>
            <div className={styles.trackContainer}>
                <div style={{maxWidth: "80%"}}><span className={styles.mainName}>{props.song}</span>
                    <span className={styles.subname}>{props.artist} | {props.album}</span>
                </div>
                <div className={styles[props.btnType]} onClick={handleClick}>
                    {props.symbol}
                </div>
            </div>
        </>
    );
};

export default Track;