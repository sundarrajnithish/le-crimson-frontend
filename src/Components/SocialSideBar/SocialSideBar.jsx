import "./Social-sidebar.css";
import SocialFriends from "../SocialCloseFriends/SocialFriends";

import { Users } from "../../dummyData";

const SocialSideBar = () => {
  return (
    <>
      <div className="social-sidebar">
        <div className="social-sidebar-wrapper">
          <ul className="social-sidebar-list">
            <li className="social-sidebar-listitems">
              <i id="fav-Icon" class="fa-solid fa-rss"></i>

              <span className="social-sidebar-listtext">Feed</span>
            </li>
            <li className="social-sidebar-listitems">
              <i id="fav-Icon" class="fa-solid fa-comments"></i>

              <span className="social-sidebar-listtext">Chats</span>
            </li>
            <li className="social-sidebar-listitems">
              <i id="fav-Icon" class="fa-solid fa-users"></i>

              <span className="social-sidebar-listtext">Friends</span>
            </li>
            <li className="social-sidebar-listitems">
              <i id="fav-Icon" class="fa-solid fa-people-group"></i>

              <span className="social-sidebar-listtext">Groups</span>
            </li>
            <li className="social-sidebar-listitems">
              <i id="fav-Icon" class="fa-solid fa-video"></i>

              <span className="social-sidebar-listtext">Videos</span>
            </li>
            <li className="social-sidebar-listitems">
              <i id="fav-Icon" class="fa-regular fa-bookmark"></i>

              <span className="social-sidebar-listtext">Bookmarks</span>
            </li>
          </ul>
          <button className="social-sidebar-button">Show More</button>
          <hr className="social-sidebarHr" />
          <ul className="social-sidebar-friendlist">
            {Users.map((u) => (
              <SocialFriends key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default SocialSideBar;
