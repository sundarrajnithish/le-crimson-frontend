import React, { useState, useEffect } from "react"
// import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card2"

import axios from 'axios'

import arrayShuffle from "array-shuffle"

const Hero = () => {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const getItems = async () => {
        const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/home')
        console.log(response.data, "At Hero1")
        setItems(arrayShuffle(response.data))
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
