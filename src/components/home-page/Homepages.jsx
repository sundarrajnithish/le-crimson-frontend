
import React from "react"

// import Hero from "./Hero"

import Header from "../common/header/Header"
import Hero from "./Hero"
import Footer from "../common/footer/footer"
import Heading from "../common/heading/Heading"

import Popular from "./popular/Popular"

import Music from "./musics/Music"

import "./homepages.css"
// import Footer from "../common/footer/footer"

// import Heading from "../common/heading/Heading"

const Homepages = () => {
  return (
    <>
    <div class="container-h">
      <Header />
      <Heading title="News" />
      <Hero />
      <Popular />
      <Music />
      <br />
      <Footer />
      </div>
      {/* <Homes /> */}
       
    </>
  )
}

export default Homepages
