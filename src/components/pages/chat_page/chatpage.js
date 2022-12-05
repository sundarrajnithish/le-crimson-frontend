import React from 'react'
import { CometChatUI } from "../../../cometchat-pro-react-ui-kit/CometChatWorkspace/src/components";

import Header from "../../common/header/Header"

import "../../chat/cometchat_login"

import "./chatpage.css"

const Chatpage = () => {

    return (
      <>
      <Header />
      <div className='chat-ui'>
      <CometChatUI />
      </div>
      </>
    )
  }
  
  export default Chatpage