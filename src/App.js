import { Routes, Route } from "react-router-dom";
import { CometChat } from "@cometchat-pro/chat";

import "./App.css";

import Loginpage from "./components/login-page/Loginpage";
import Update_Db from "./components/login-page/update_db";
import Homepages from "./components/pages/home_page/Homepages";
// import Profilepage from "./components/pages/profile/profilepage";
import PreferencePage from "./components/preferences/common/PreferencePage";
import Searchpage from "./components/search/searchpage";
import ProfileCommunication from "./components/pages/ProfileCommunication/profileCommunication";
import Chatpage from "./components/pages/chat_page/chatpage";
import Social_page from "./components/pages/social_page/social_page";
import FollowerPage from "./components/user-profile/FollowerTable/followerPage";
import FriendPage from "./components/user-profile/FriendsTable/friendPage";
import BlockedUserPage from "./components/user-profile/BlockTable/BlockedPage";

import SuggessionPage from "./components/user-profile/Suggessions/SuggessionPage";

import ContactPage from "./components/pages/contact/contactpage";
import AboutUsPage from "./components/pages/about/AboutUsPage";

import Dashboard from "./components/pages/admin-page/dashboard/dashboard";
import AdminList from "./components/pages/admin-page/AdminList/admin-list";
import AdminLogsPage from "./components/pages/admin-page/AdminLogs/AdminLogsPage";

import CategoryList from "./components/pages/admin-page/AdminCategoryList/CategoryList";
import AdminUserListPage from "./components/pages/admin-page/AdminUserListPage/AdminUserListPage";
import FriendRequestPage from "./components/user-profile/FriendRequest/FriendRequestPage";

import World_page from "./components/pages/World/world_page";
import Business_page from "./components/pages/Business/business_page";
import Sports_page from "./components/pages/Sports/sports_page";

import Politics_page from "./components/pages/Politics/politics_page";
import Health_page from "./components/pages/Health/health_page";
import Science_page from "./components/pages/Science/science_page";
import Technology_page from "./components/pages/Technology/technology_page";
import Entertainment_page from "./components/pages/Entertainment/entertainment_page";

import Invite_page from "./components/pages/invite/invite_page";

import "./components/chat/cometchat";

// import { CometChat } from "@cometchat-pro/chat";
import * as CONSTANTS from "./components/constants/constants";

const authKey = CONSTANTS.AUTH_KEY;
const uid = "user2";
// const uid = localStorage.getItem("email")
const name = localStorage.getItem("name");

// var user = new CometChat.User(uid);
// user.setName(name);
// CometChat.createUser(user, authKey).then(
//     user => {
//         console.log("user created", user);
//     },error => {
//         console.log("error", error);
//     }
// )

CometChat.login(uid, authKey).then(
  (user) => {
    console.log("Login Successful:", { user });
  },
  (error) => {
    console.log("Login failed with exception:", { error });
  }
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/login_process" element={<Update_Db />} />
        <Route path="/home" element={<Homepages />} />
        <Route path="/preferences" element={<PreferencePage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/chat" element={<Chatpage />} />
        <Route path="/social" element={<Social_page />} />
        <Route path="/profile" element={<ProfileCommunication />} />
        <Route path="/followers" element={<FollowerPage />} />
        <Route path="/friends" element={<FriendPage />} />
        <Route path="/blocked" element={<BlockedUserPage />} />
        <Route path="/suggesions" element={<SuggessionPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/users" element={<AdminList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/adminuser" element={<AdminUserListPage />} />
        <Route path="/friendrequest" element={<FriendRequestPage />} />
        <Route path="/logs" element={<AdminLogsPage />} />
        <Route path="/World" element={<World_page />} />
        <Route path="/Business" element={<Business_page />} />
        <Route path="/Sports" element={<Sports_page />} />
        <Route path="/Politics" element={<Politics_page />} />
        <Route path="/Health" element={<Health_page />} />
        <Route path="/Science" element={<Science_page />} />
        <Route path="/Technology" element={<Technology_page />} />
        <Route path="/Entertainment" element={<Entertainment_page />} />
        {/* <Route path="/invite" element={<Invite_page />} /> */}

      </Routes>
    </>
  );
}

export default App;
