// CSS Files
import './App.css';

// Imports
import React from 'react'
import Loginpage from './components/login-page/Loginpage';
import { Routes, Route } from "react-router-dom";
import Homepages from './components/home-page/Homepages';
import PreferencePage from './components/preferences/PreferencePage';
import Contact from './components/contact/contactpage';
import AboutUsPage from './components/about/AboutUsPage';
import Profile from './components/profile/profilepage'
import Search from './components/search/searchpage'

// import Cometchat from "./components/social/cometchat"

// import Bootstrap from "./components/news-bootstrap/bootstrap"

// Comet Chat Components
import { CometChat } from "@cometchat-pro/chat";
import * as CONSTANTS from "./constants/constants";
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/components";

import Chatpage from "./components/chatpage/chatpage"


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

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/home" element={<Homepages />} />
        <Route path="/preferences" element={<PreferencePage />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chat" element={<Chatpage />} />
        {/* <Route path="/boot" element={<Bootstrap />} /> */}
        </Routes>
  
    </>
  );
}

export default App;
