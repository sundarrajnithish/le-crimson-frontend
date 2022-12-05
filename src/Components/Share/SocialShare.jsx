import "./Socialshare.css";

const SocialShare = () => {
  return (
    <>
      <div className="social-share-container">
        <div className="social-share-wrapper">
          <div className="social-share-top">
            <img
              className="social-share-proImg"
              src={require("./1.jpeg")}
              alt="pro pic"
            />
            <input
              placeholder="What's in your mind"
              className="social-shareInput"
            />
          </div>
          <hr className="social-share-hr" />
          <div className="social-share-bottom">
            <div className="social-share-options">
              <div className="social-share-option">
                <i
                  id="social-share-icons"
                  class="fa-solid fa-photo-film"
                  style={{ color: "blue" }}
                ></i>
                <span className="social-share-option-text">Photo or Video</span>
              </div>
              <div className="social-share-option">
                <i
                  id="social-share-icons"
                  class="fa-solid fa-share-nodes"
                  style={{ color: "green" }}
                ></i>
                <span className="social-share-option-text">Tag</span>
              </div>
              <div className="social-share-option">
                <i
                  id="social-share-icons"
                  class="fa-solid fa-location-dot"
                  style={{ color: "red" }}
                ></i>
                <span className="social-share-option-text">Locations</span>
              </div>
              <div className="social-share-option">
                <i
                  id="social-share-icons"
                  class="fa-regular fa-face-smile"
                  style={{ color: "goldenrod" }}
                ></i>
                <span className="social-share-option-text">Feelings</span>
              </div>
            </div>
            <button className="social-share-button">Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialShare;
