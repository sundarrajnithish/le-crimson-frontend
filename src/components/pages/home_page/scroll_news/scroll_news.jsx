import "./scroll_news.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import { popular } from "./dummyData"
import Heading from "../../../../components/common/heading/Heading"

import axios from 'axios'
import React, { useState, useEffect } from "react"
// import arrayShuffle from "array-shuffle"



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
      console.log(response.data, "Data at Scroll News")
        setItems(response.data)
    }
        getItems()
}, [])

let news_data = items
console.log(news_data[0], "This is original news data")
// console.log(popular, "this is popular")
  return (
    <>
    
      <section className='popular'>
        <Heading title='Latest' />
        <div className='content'>
          <Slider {...settings}>
            {
            items.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      {/* <div class='category category1'>
                        <span>{val.catgeory}</span>
                      </div> */}
                    </div>
                    <div className='text row'>
                      <h1 className='title'><a href={val.articleUrl}>{val.headlines.slice(0, 40)}...</a></h1>
                      <div className='date'>
                        <i className='fas fa-calendar-days'> </i>
                        <label> {val.publishDate}</label>
                      </div>
                      <div className='comment'>
                        <button onClick={() => {console.log({id: val.id, articleUrl: val.articleUrl}, "News Data for Post")}}>
                        <i className='fas fa-share'></i>
                        </button>
                        <label>{" "}</label>
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
