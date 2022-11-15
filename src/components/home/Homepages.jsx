
import React from "react"
// import Discover from "./discover/Discover"

import Hero from "./hero/Hero"
import Hero1 from "./hero/Hero1"
import Homes from "./mainContent/homes/Home"

import Music from "./mainContent/musics/Music"

import Header from "../common/header/Header"
import Footer from "./footer"
import Discover from "./discover/Discover"

import Heading from "../common/heading/Heading"

const Homepages = () => {
  return (
    <>
    <div class="container-h">
      <Header />
      {/* <Heading title='Search your news here!' />
      
      <div className="searchbar">
                  <input
                    type="text"
                    placeholder="Search..."
                    style={{ width: "500px", height: "25px" }}
                  />
                </div> */}
              
                <Heading title='#1 Trending' />
      <Hero />
      <Discover />
      <Heading title='Cricket News' />
      <Hero1 />
      
      <Music />
      <br />
      <Footer />
      </div>
      {/* <Homes /> */}
       
    </>
  )
}

export default Homepages
