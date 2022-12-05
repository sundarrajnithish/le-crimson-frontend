import { Routes, Route } from "react-router-dom";
import { CometChat } from "@cometchat-pro/chat";

import "./App.css";

import Loginpage from "./components/login-page/Loginpage";
import Update_Db from "./components/login-page/update_db";
import Homepages from "./components/pages/home_page/Homepages";
import Profilepage from "./components/pages/profile/profilepage";
import SocialDashboard from "./components/pages/SocialDashboard/SocialDashboard";
import ProfileCommunication from "./components/pages/ProfileCommunication/profileCommunication";
import FollowerPage from "./components/user-profile/FollowerTable/followerPage";
import FriendPage from "./components/user-profile/FriendsTable/friendPage";
import BlockedUserPage from "./components/user-profile/BlockTable/BlockedPage";
import SuggessionPage from "./components/user-profile/Suggessions/SuggessionPage";
import SocialProfile from "./components/pages/SocialProfile/SocialProfile";

//import Chatpage from "./components/pages/chat_page/chatpage";

//import "./components/chat/cometchat"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/login_process" element={<Update_Db />} />
        <Route path="/home" element={<Homepages />} />
        <Route path="/profile" element={<ProfileCommunication />} />
        <Route path="/social" element={<SocialDashboard />} />
        <Route path="/followers" element={<FollowerPage />} />
        <Route path="/friends" element={<FriendPage />} />
        <Route path="/blocked" element={<BlockedUserPage />} />
        <Route path="/suggession" element={<SuggessionPage />} />
        <Route path="/user" element={<SocialProfile />} />
        {/*<Route path= "/chat" element={<Chatpage />} />*/}
      </Routes>
    </>
  );
}

export default App;
