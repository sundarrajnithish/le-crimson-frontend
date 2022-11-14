import React from "react"
// import Discover from "./discover/Discover"
import Hero from "./hero/Hero"
import Hero1 from "./hero/Hero1"
import Homes from "./mainContent/homes/Home"

import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const Homepages = () => {
  return (
    <>
    <div class="container-h">
      <Header />
      <h1>Canada News</h1>
      <Hero />
      <h1>Cricket News</h1>
      <Hero1 />
      <Footer />
      </div>
      {/* <Homes /> */}
       
    </>
  )
}

export default Homepages
