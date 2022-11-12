import React, { useState, useEffect } from "react"
// import { discover } from "../../../dummyData"
import Heading from "../../common/heading/Heading"
import "./style.css"

import axios from 'axios'

import data from "./search-api-response"

console.log(data, "here is the data")
console.log(data.headlines, "here is the headlines")

const Discover = () => {
  
  return (
    <>
      <section className={data.headlines}>
        <div className={data.headlines}>
          <Heading title={data.headlines}/>
          <div className={data.headlines}>
            {data.headlines.slice(0,4).map((val) => {
              return (
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <h1 className='title'>{val.title}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover
