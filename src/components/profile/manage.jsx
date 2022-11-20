import React from "react";

import "./manage.css"

const manage = () => {
  return (
    <section id="manage">
      <h2>Manage</h2>
      <br />
      <div className="managing_container">
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