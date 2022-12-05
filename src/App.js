import "./App.css";
import ProfileCommunication from "./Pages/ProfileCommunication/profileCommunication";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FriendPage from "./Components/FriendsTable/friendPage";
import FollowerPage from "./Components/FollowerTable/followerPage";
import BlockedUserPage from "./Components/BlockTable/BlockedPage";
import SuggessionPage from "./Components/Suggessions/SuggessionPage";

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
          <Route path="/suggession" element={<SuggessionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
