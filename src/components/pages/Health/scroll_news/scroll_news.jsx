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
  const [post, setPost] = useState([])
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/topic?q=HEALTH')
      console.log(response.data, "Data at Scroll News")
        setItems(response.data)}


       const send_post = async () => {
          const posted = await axios.post('https://lecrimson-backend.herokuapp.com/news/feed?=', {})
          console.log(posted, "Posted Data at Scroll News")
            setPost(posted)
    }
    getItems();
    send_post();       
}, [])

let news_data = items
console.log(news_data[0], "This is original news data")
// console.log(popular, "this is popular")

let user_data = JSON.parse(localStorage.getItem("profile-data"))
console.log(user_data, "This is user data")
  
  // Post_data()

  function callYourAPI(data) {


    console.log(JSON.stringify(data))
    axios.post("https://lecrimson-backend.herokuapp.com/news/feed?=", data)
  
  
  };

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
                        <button onClick={() => {callYourAPI({headlines: val.headlines,
            sourceUrl: val.sourceUrl,
            sourceName: val.sourceName,
            articleUrl: val.articleUrl,
            publishDate: val.publishDate,
            cover: val.cover ,
            userId:user_data["id"],
            name: user_data["firstName"],
            profilePic: user_data["profilePic"]}, "News Data for Post")}}>
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
