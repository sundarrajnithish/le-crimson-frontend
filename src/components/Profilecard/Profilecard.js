import "./profilecard.css";
import Items from "./profile-response.json";

function Profilecard() {
  return Items.map((items) => {
    return (
      <div key={items.id} className="pro-container">
        <div className="pro-card">
          <img
            src={require("./Profile-icon.png")}
            alt="i"
            className="pro-img"
          ></img>

          <h2 className="pro-data">{items.firstName}</h2>
          <button className="pro-button">Follow</button>
        </div>
      </div>
    );
  });
}

export default Profilecard;
