import styles from '../ComponentsCss/Button.module.css';

function Button(props){
    return(
        <input type={props.type} style={{...props.style}}  
        value={props.text} className={styles[props.bclass]} onClick={props.onClick}/>
    );
}

export default Button;