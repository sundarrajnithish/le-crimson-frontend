import { Routes, Route } from "react-router-dom";
import { CometChat } from "@cometchat-pro/chat";

import './App.css';

import Loginpage from './components/login-page/Loginpage';
import Update_Db from "./components/login-page/update_db";
import Homepages from "./components/pages/home_page/Homepages";
import Profilepage from "./components/pages/profile/profilepage";
import PreferencePage from "./components/preferences/common/PreferencePage";
import Searchpage from "./components/search/searchpage";

// import Chatpage from "./components/pages/chat_page/chatpage";

// import "./components/chat/cometchat"

function App() {
  return (
    <>
    <Routes>
        <Route path= "/" element={<Loginpage />} />
        <Route path= "/login_process" element={<Update_Db />} />
        <Route path= "/home" element={<Homepages />} />
        <Route path= "/profile" element={<Profilepage />} />
        <Route path= "/preferences" element={<PreferencePage />} />
        <Route path= "/search" element={<Searchpage />} />
        {/* <Route path= "/chat" element={<Chatpage />} /> */}
    </Routes>
    </>
  )
}

export default App;
