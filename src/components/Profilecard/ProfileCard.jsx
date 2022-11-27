import "./ProfileCard.css";
import Items from "./profile-response.json";

const ProfileCard = () => {
  return Items.map((items) => {
    return (
      <div key={items.id} className="profilecard-container">
        <div className="profilecard-left">
          <span className="user-logo">
            <img
              src={require("./Profile-icon.png")}
              alt="i"
              className="pro-img"
            ></img>
          </span>
          <span className="user-Name">{items.firstName}</span>
        </div>
        <div className="profilecard-right">
          <button className="pro-button">Follow</button>
        </div>
        <hr />
      </div>
    );
  });
};

export default ProfileCard;
