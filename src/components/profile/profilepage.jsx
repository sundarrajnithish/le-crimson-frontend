import React from 'react'
import Profile from "./profile"

import Header from "../common/header/Header"

import Manage from "./manage"
import Footer from '../common/footer/footer'

import Sidebar from "../Sidebar/profilecardSidebar"

import SingleUser from './admin-singleuser'

import "../location/location"

const profilepage = () => {
  return (
    
    <div className='container-h'>
        <Header />
        {/* <Location /> */}
        <div className="ProfileComm">
      <Sidebar />
      <div className="ProfileCommContainer">
        <></>
        {/* <AdminNavigationbar /> */}
        <hr />
        <div className="profile-card-comm-list">
          <div>
            <SingleUser />
          </div>
        </div>
      </div>
    </div>
        {/* <Profile /> */}
        {/* <Manage /> */}
        <Footer />
    </div>
  )
}

export default profilepage