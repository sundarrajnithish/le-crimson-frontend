import "./Socialfriends.css";

const SocialFriends = ({ user }) => {
  return (
    <div>
      <li className="social-sidebar-friend">
        <img
          className="social-sidebar-friend-img"
          src={user.profilePicture}
          alt="friend pro pic"
        />
        <span className="social-sidebar-friend-name">{user.username}</span>
      </li>
    </div>
  );
};

export default SocialFriends;
