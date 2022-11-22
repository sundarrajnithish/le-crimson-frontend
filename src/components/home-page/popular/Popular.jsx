import "./Popular.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { popular } from "./dummyData"
import Heading from "../../common/heading/Heading"

import axios from 'axios'
import React, { useState, useEffect } from "react"
import arrayShuffle from "array-shuffle"



const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
        },
      },
    ],
  }

  const [items, setItems] = useState([])
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/home')
      console.log(response.data, "Data at NewsData")
      localStorage.setItem('home-news', JSON.stringify(response.data));
        setItems(response.data.articles)
        // console.log(items, "Before Shuffling")
        // items = arrayShuffle(items)
        // console.log(shuffleItem, "Shuffled")
    }
        getItems()
}, [])


let test = JSON.parse(localStorage.getItem('home-news'))
console.log(test, "this is test")
console.log(popular, "this is popular")
  return (
    <>
    
      <section className='popular'>
        <Heading title='Popular' />
        <div className='content'>
          <Slider {...settings}>
            {
            test.slice(0,8).map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={"../images/popular/pop1.jpg"} alt='' />
                      </div>
                      {/* <div class='category category1'>
                        <span>{val.catgeory}</span>
                      </div> */}
                    </div>
                    <div className='text row'>
                      <h1 className='title'>{val.headlines.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
                        <label>{val.publishDate}</label>
                      </div>
                      <div className='comment'>
                        <i class='fas fa-comments'></i>
                        <label>{"1"}</label>
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

export default Popular
