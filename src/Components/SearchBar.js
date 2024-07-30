import { useState } from "react";
import styles from '../ComponentsCss/SearchBar.module.css'
import Button from "./Button";


function SearchBar(props){
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearchChange = ({target}) =>{
        setSearchTerm(target.value)
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const endpoint = "https://api.spotify.com/v1/search";
        const headers = {
            Authorization: `Bearer ${props.token}`
        };
        const params = {
            q: searchTerm,
            type: ["track"],
            limit: 10
        };
        const queryString = new URLSearchParams(params).toString()
        try{
            const response = await fetch(`${endpoint}?${queryString}`,{
                method: 'GET',
                headers: headers
            });
            if(!response.ok) throw new Error("HTTP Error");
            const data = await response.json();
            props.setTrackData(data)
        }catch(e){
            console.log('Error in fetching data', e)
        }
    };

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="search" id="search" value={searchTerm} 
            onChange={handleSearchChange} className={styles.input}/>
            <Button type="submit" text="Search" bclass="btn"/>
        </form>
    );
}

export default SearchBar;