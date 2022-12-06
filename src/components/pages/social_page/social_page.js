import React from 'react'

import Header from '../../common/header/Header'
import SocialPost from '../../social/Post/SocialPost'
import SocialSideBar from '../../social/SocialSideBar/SocialSideBar'

import ProfileCardSideBar from '../../user-profile/Sidebar/profilecardSidebar'

const Social_page = () => {
  return (
    <>
    <Header />
    <div className="followComm">
      <ProfileCardSideBar />
      
      <div className="followCommContainer">
    <SocialPost />
    </div>
    </div>
    {/* <SocialSideBar /> */}
    </>
  )
}

export default Social_page