import "./socialTopbar.css";
const SocialTopBar = () => {
  return (
    <div className="social-topbar-container">
      <div className="social-topbar-left">
        <span className="social-logo">le crimson</span>
      </div>
      <div className="social-topbar-center">
        <div className="social-searchbar">
          <i id="social-search-icon" class="fa-solid fa-magnifying-glass"></i>

          <input
            placeholder="Search for friend, post or video"
            className="social-searchinput"
          />
        </div>
      </div>
      <div className="social-topbar-right">
        <div className="social-topbar-links">
          <span className="social-topbar-link">Homepage</span>
          <span className="social-topbar-link">Timeline</span>
        </div>
        <div className="social-topbar-icons">
          <div className="social-topbar-icon-item">
            <i class="fa-solid fa-user"></i>

            <span className="social-topbar-icon-badge">1</span>
          </div>
          <div className="social-topbar-icon-item">
            <i class="fa-solid fa-comments"></i>
            <span className="social-topbar-icon-badge">1</span>
          </div>
          <div className="social-topbar-icon-item">
            <i class="fa-solid fa-bell"></i>
            <span className="social-topbar-icon-badge">1</span>
          </div>
        </div>
        <img
          src={require("./1.jpeg")}
          alt="propic"
          className="social-topbar-img"
        />
      </div>
    </div>
  );
};

export default SocialTopBar;
