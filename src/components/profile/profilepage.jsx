import React from 'react'
import Profile from "./profile"

import Header from "../common/header/Header"

import Manage from "./manage"

import Preferences from "./CheckCircle"

const profilepage = () => {
  return (
    <div className='container-h'>
        <Header />
        <Profile />
        <Manage />
        <br />
        <br />
        <br />
        <br />

        <br />

        <br />
        <br />
        <br />
        <br />
        {/* <Preferences /> */}
    </div>
  )
}

export default profilepage