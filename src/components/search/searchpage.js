import Header from "../common/header/Header"
import searchQuery from "./search"
import Search from "./search"
import React, { useState, useEffect } from "react"
import Newslist from './news-list'
import arrayShuffle from "array-shuffle"
import axios from 'axios'
import Heading from "../common/heading/Heading"
// import Dropdown from "./dropdown"

import "./search.css"

const Searchpage = () => {
  const [items, setItems] = useState([])
  
    useEffect(() => {
      const getItems = async () => {
        let searchLocation = "CA"
        let search = "trending"
        console.log(searchLocation, "Received Search location")
          const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/search?q='+searchQuery+'&location='+searchLocation+"")
          // console.log(response, "This is the search URL")
          console.log(searchQuery, "Received Search Query")
          console.log('https://lecrimson-backend.herokuapp.com/news/search?q='+searchQuery+'&location='+searchLocation+'')
          console.log(response.data, "At Hero1")
          setItems(arrayShuffle(response.data))
      }
          getItems()
  }, [])
    
  return (
    <>
    <div className='container-h'>
    <Header />
    <br />
    <Search />
    
    {/* <Dropdown /> */}
    
    <Heading title="Results" />
    <Newslist />
    {/* <News /> */}
    </div>
    </>
  )
}

export default Searchpage