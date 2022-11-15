import React, { useState, useEffect } from "react"
// import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card"

import axios from 'axios'

import arrayShuffle from "array-shuffle"

const Hero = () => {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const getItems = async () => {
        const response = await axios.get('https://newsapi.org/v2/everything?q=Cricket&apiKey=0de6fae3bb8e4eecaf844a1ab735a457')
        console.log(response.data, "At Hero")
        setItems(arrayShuffle(response.data.articles))
    }
        getItems()
}, [])


  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.slice(9, 13).map((item) => {
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
