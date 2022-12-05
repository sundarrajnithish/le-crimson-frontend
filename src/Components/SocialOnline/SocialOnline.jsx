import "./SocialOnline.css";

const SocialOnline = ({ user }) => {
  return (
    <li className="social-rightbar-friend">
      <div className="social-rightbar-friend-proImg-container">
        <img
          className="social-rightbar-friend-proImg"
          src={user.profilePicture}
          alt=""
        />
        <span className="social-rightbar-online"></span>
      </div>
      <span className="social-rightbar-username">{user.username}</span>
    </li>
  );
};
export default SocialOnline;
