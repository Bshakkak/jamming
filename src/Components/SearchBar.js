import { useState } from "react";
import styles from '../ComponentsCss/SearchBar.module.css'
import Button from "./Button";


function SearchBar(){
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearchChange = ({target}) =>{
        setSearchTerm(target.value)
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert('data submitted!')
    };

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="search" id="search" value={searchTerm} 
            onChange={handleSearchChange} className={styles.input}/>
            <Button type="submit" text="Search"/>
        </form>
    );
}

export default SearchBar;