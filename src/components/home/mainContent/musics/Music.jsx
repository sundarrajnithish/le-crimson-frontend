import React, { useState, useEffect } from "react"
import "./music.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { popular } from "../../../../dummyData"

import local_data from "./search-api-response.json"

import axios from 'axios'

import arrayShuffle from "array-shuffle"

const Music = () => {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const getItems = async () => {
        const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/home')
        console.log(response.data, "At Music")
        setItems(arrayShuffle(response.data))
    }
        getItems()
}, [])

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  }
  console.log(local_data, "data is music.jsx")

  return (
    <>
      <section className='music'>
        <Heading title='Trending News' />
        <div className='content'>
          <Slider {...settings}>
            {popular
              .filter((val) => val.catgeory === "fun")
              .map((val) => {
                return (
                  <div className='items'>
                    <div className='box shadow flexSB'>
                      <div className='images'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        {/* <div class='category category1'>
                          {/* <span>{val.catgeory}</span> */}
                        {/* </div> */} 
                      </div>
                      <div className='text'>
                        <h1 className='title'>{local_data[0, 5].headlines.slice(0, 40)}...</h1>
                        <div className='date'>
                          <i class='fas fa-calendar-days'></i>
                          <label>{val.date}</label>
                        </div>
                        <p className='desc'>{val.desc.slice(0, 250)}...</p>
                        <div className='comment'>
                          <i class='fas fa-share'></i>
                          <label>Share / </label>
                          <i class='fas fa-comments'></i>
                          <label>{val.comments}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Music
