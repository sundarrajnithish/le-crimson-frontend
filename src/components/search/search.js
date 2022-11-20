import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import React, { useState } from 'react';
import arrayShuffle from "array-shuffle"
import "./search.css"



const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // const history = useNavigate();

    const onSubmit = e => {
        // history.push(`?s=${searchQuery}`);
        console.log("submit ran")
        e.preventDefault();

        console.log(searchQuery, "Printing Search Query")
        localStorage.setItem('search-key', JSON.stringify(searchQuery));
        console.log(localStorage.getItem("search-key")," *Search Key in Local Storage");
        
    };

    

    return (
        
        <form
            action="/search"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            {/* <label htmlFor="header-search">
                <span className="visually-hidden">
                    
                </span>
            </label> */}
            <div className='search-bar'>
            <input
                value={searchQuery}
                // onInput={(e) => setSearchQuery(e.target.value)}
                onChange={e => setSearchQuery(e.target.value)}
                type="text"
                id="search-data"
                placeholder="Search News..."
                name="search-data"
            /> 
            </div>
            <div className='search-button'>
            <button className='searchbutton' type="submit">Search</button>
            </div>
        </form>

        
        
        
    );
};





export default SearchBar;