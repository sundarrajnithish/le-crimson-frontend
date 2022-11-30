import React, { useState, useEffect } from "react"
// import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card"

import axios from 'axios'

import arrayShuffle from "array-shuffle"

const Hero = () => {
  const [items, setItems] = useState([])
  let shuffleItem = []
  let search_term = "Cricket"
  useEffect(() => {
    const getItems = async () => {
        const response = await axios.get('https://newsapi.org/v2/everything?q='+search_term+'&apiKey=7d74996a3f8f466397819242b422b2a3')
        console.log(response.data, "At Hero (NewsAPI Data)")
        setItems(arrayShuffle(response.data.articles))
        // console.log(items, "Before Shuffling")
        // items = arrayShuffle(items)
        // console.log(shuffleItem, "Shuffled")
    }
        getItems()
}, [])




  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.slice(0, 4).map((item) => {
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
