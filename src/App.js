import "./App.css";
import ProfileCommunication from "./Pages/ProfileCommunication/profileCommunication";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FriendPage from "./Components/FriendsTable/friendPage";
import FollowerPage from "./Components/FollowerTable/followerPage";
import BlockedUserPage from "./Components/BlockTable/BlockedPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProfileCommunication />} />
          </Route>
          <Route path="/followers" element={<FollowerPage />} />
          <Route path="/friends" element={<FriendPage />} />
          <Route path="/blocked" element={<BlockedUserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
