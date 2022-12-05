import "./adminnav.css";

const AdminNavigationbar = () => {
  return (
    <div className="admin-navbar">
      <div className="admin-navbar-wrapper">
        <div className="admin-navbar-search">
          <input
            className="admin-search-input"
            type="text"
            placeholder="search..."
          />
        </div>
        <div className="admin-navbar-items">
          <div className="singleitem">English</div>
          <div className="singleitem">
            <div className="admin-nav-notify-counter">5</div>
          </div>
          <div className="singleitem">
            <button></button>
          </div>

          <div className="singleitem">
            <button></button>
          </div>
          <div className="singleitem"></div>
          <div className="singleitem"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigationbar;
