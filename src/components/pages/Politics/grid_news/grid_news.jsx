import React, { useState, useEffect } from "react"

import "./grid_news.css"

import Heading from "../../../common/heading/Heading"

import Card from "./Card"
import axios from 'axios'
// import arrayShuffle from "array-shuffle"

const Hero = () => {
  const [items, setItems] = useState([])
  let shuffleItem = []
  let search_term = "Cricket"
  useEffect(() => {
    const getItems = async () => {
        const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/topic?q=POLITICS')
        console.log(response.data, "At Hero (Crimson DB Data)")
        setItems(response.data)
        // console.log(items, "Before Shuffling")
        // items = arrayShuffle(items)
        // console.log(shuffleItem, "Shuffled")
    }
        getItems()
}, [])

  return (
    <>
    <Heading title="Trending #1" />
      <section className='hero'>
        <div className='container'>
          {items.slice(4, 8).map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero
