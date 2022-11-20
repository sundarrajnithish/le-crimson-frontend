import React from 'react'
import Profile from "./profile"

import Header from "../common/header/Header"

import Manage from "./manage"
import Footer from '../common/footer/footer'



const profilepage = () => {
  return (
    <div className='container-h'>
        <Header />
        <Profile />
        <Manage />
        <Footer />
    </div>
  )
}

export default profilepage