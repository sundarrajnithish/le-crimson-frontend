
import React from "react"
// import Discover from "./discover/Discover"

import Hero from "./hero/Hero"
import Hero1 from "./hero/Hero1"
import Homes from "./mainContent/homes/Home"

import AnotherPage from "./mainContent/life/Life"

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
              
                <Heading title='Picture News' />
      <Hero />
      
      {/* <Discover /> */}
      <Heading title='Generic News' />
      <Hero1 />
      <AnotherPage />
      
      {/* <AnotherPage /> */}
      <br />
      <Footer />
      </div>
      {/* <Homes /> */}
       
    </>
  )
}

export default Homepages
