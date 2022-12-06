import React from 'react'

import Header from "../../common/header/Header"

import SingleUser from "../../profile/profile"

import Footer from '../../common/footer/footer'

const profilepage = () => {
  return (
    
    <div>
        <Header />
          <div>
            <SingleUser />
          </div>
          <Footer />
    </div>
    
  )
}

export default profilepage