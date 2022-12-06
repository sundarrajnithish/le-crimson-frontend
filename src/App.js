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

import CategoryList from "./components/pages/admin-page/AdminCategoryList/CategoryList";
import AdminUserListPage from "./components/pages/admin-page/AdminUserListPage/AdminUserListPage";
import FriendRequestPage from "./components/user-profile/FriendRequest/FriendRequestPage";


import "./components/chat/cometchat";

// import { CometChat } from "@cometchat-pro/chat";
import * as CONSTANTS from "./components/constants/constants";

const authKey = CONSTANTS.AUTH_KEY;
const uid = "user1";
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
        {/* <Route path="/profile" element={<Profilepage />} /> */}
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




      </Routes>
    </>
  );
}

export default App;
