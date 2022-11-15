import React from "react";

import "./profile.css"

const manage = () => {
  return (
    <section id="manage">
      <h2>Manage</h2>
      <br></br>
      <div className="container manage__container" style={{ width: "14%" }}>
        <button type="submit" className="btn btn-primary button-spacing">
          Friends
        </button>
        <button type="submit" className="btn btn-primary button-spacing">
          Followers
        </button>
        <button type="submit" className="btn btn-primary button-spacing">
          Blocked Users
        </button>
      </div>
    </section>
  );
};

export default manage;