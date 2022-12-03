import React from 'react'
import { CometChatUI } from "../../cometchat-pro-react-ui-kit/CometChatWorkspace/src/components";
import * as CONSTANTS from '../../constants/constants'
import { CometChat } from '@cometchat-pro/chat';

import Header from "../common/header/Header"

import "./chatpage.css"

const uid = "user1";

const appid = CONSTANTS.APP_ID;
const region = CONSTANTS.APP_REGION;
const authKey = CONSTANTS.AUTH_KEY;
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();

  CometChat.login(uid, authKey).then(
    (user) => {
      console.log("Login Successful:", { user });
    },
    (error) => {
      console.log("Login failed with exception:", { error });
    }
  );

CometChat.init(appid, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
  },
  (error) => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

const chatpage = () => {
  return (
    <>
    <Header />
    <div className='chat-ui'>
    <CometChatUI />
    </div>
    </>
  )
}

export default chatpage