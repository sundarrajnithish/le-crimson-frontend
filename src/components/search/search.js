import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import React, { useState, useEffect } from "react"
import arrayShuffle from "array-shuffle"

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useNavigate();
    const [items, setItems] = useState([])
  
    useEffect(() => {
      const getItems = async () => {
        let search = "trending"
          const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/search?q='+searchQuery+'&location=CA')
          console.log(searchQuery)
          console.log('https://lecrimson-backend.herokuapp.com/news/search?q='+searchQuery+'&location=CA')
          console.log(response.data, "At Hero1")
          setItems(arrayShuffle(response.data))
      }
          getItems()
  }, [])

    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form
            action="/search"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    
                </span>
            </label>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search News..."
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;