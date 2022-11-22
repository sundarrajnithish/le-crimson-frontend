import React from "react"
import "./music.css"
import Slider from "react-slick"
import Heading from "../../common/heading/Heading"
import { popular } from "./dummyData"

const Music = () => {
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
  let test = JSON.parse(localStorage.getItem('home-news'))
  console.log(test, "test at music")
  console.log("Im feee")
  return (
    <>
      <section className='music'>
        <Heading title='Music News' />
        <div className='content'>
          <Slider {...settings}>
            {test.slice(0,8).map((val) => {
                return (
                  <div className='items'>
                    <div className='box shadow flexSB'>
                      <div className='images'>
                        <div className='img'>
                          <img src={"../images/popular/pop1.jpg"} alt='' />
                        </div>
                        {/* <div class='category category1'>
                          <span>{val.catgeory}</span>
                        </div> */}
                      </div>
                      <div className='text'>
                        <h1 className='title'>{val.headlines.slice(0, 40)}...</h1>
                        <div className='date'>
                          <i class='fas fa-calendar-days'></i>
                          <label>{val.date}</label>
                        </div>
                        <p className='desc'>{"Testing"}...</p>
                        {/* val.description.slice(0, 250) */}
                        <div className='comment'>
                          <i class='fas fa-share'></i>
                          <label>Share / </label>
                          <i class='fas fa-comments'></i>
                          <label>{"0"}</label>
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
