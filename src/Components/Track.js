import styles from '../ComponentsCss/Track.module.css';

function Track(props){
    const handleClick = () =>{
        alert('added');
    }
    return(
        <>
            <div className={styles.trackContainer}>
                <div><span className={styles.mainName}>{props.song}</span>
                    <span className={styles.subname}>{props.artist} | {props.album}</span>
                </div>
                <div className={styles.btnAdd} onClick={handleClick}>+</div>
            </div>
        </>
    );
};

export default Track;