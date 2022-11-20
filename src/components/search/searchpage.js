import Header from "../common/header/Header"
import searchQuery from "./search"
import Search from "./search"
import React, { useState, useEffect } from "react"
import News from "./news"
import arrayShuffle from "array-shuffle"
import axios from 'axios'
import Newslist from '../news-display/news-list'


import "./search.css"

const Searchpage = () => {
  const [items, setItems] = useState([])
  
    useEffect(() => {
      const getItems = async () => {
        let search = "trending"
          const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/search?q='+searchQuery+'&location=CA')
          console.log(searchQuery, "Received Search Query")
          console.log('https://lecrimson-backend.herokuapp.com/news/search?q='+searchQuery+'&location=CA')
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
    <br />
    <Newslist />
    {/* <News /> */}
    </div>
    </>
  )
}

export default Searchpage