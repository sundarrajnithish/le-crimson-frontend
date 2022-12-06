import React, { useState, useEffect } from "react";
import axios from "axios";

const Request_data = () => {
  const [request, setRequest] = useState([]);
  useEffect(() => {
    const sendProfile = async () => {
      let user_id = JSON.parse(localStorage.getItem("user-db-data")).id;
      let follower = JSON.parse(localStorage.getItem("profile-data")).id;
      console.log(follower, "follower is here");
      const response = await axios.put(
        "https://lecrimson-backend.herokuapp.com/profile/follow?userId=" +
          user_id +
          "&followerId=" +
          follower
      );
      console.log(response, "Profile Data");
      setRequest(response);
    };
    sendProfile();
  }, []);

  return (
    <>
      <div>request_data</div>;
    </>
  );
};

export default Request_data;
