import React from 'react'
import { CometChatUI } from "../../../cometchat-pro-react-ui-kit/CometChatWorkspace/src/components";

import Header from "../../common/header/Header"

import Footer from '../../common/footer/footer';

import "../../chat/cometchat_login"

import "./chatpage.css"

const Chatpage = () => {

    return (
      <>
      <Header />
      <div  style={{width: '800px', height:'800px' }}>
      <CometChatUI />
      </div>
      <Footer />
      </>
    )
  }
  
  export default Chatpage