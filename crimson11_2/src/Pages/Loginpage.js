import LoginFB from "../Components/FBAuth";
import GLogin from "../Components/GAuth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Loginpage() {
  const [stateAuth, setStateAuth] = useState();
  const response = (res) => {
    setStateAuth(res);

    console.log(stateAuth);
  };
  let navigate = useNavigate();
  const route = () => {
    let path = `/Preference`;
    navigate(path);
  };

  return (
    <div class="container-L">
      <button onClick={route}>preferencetrial</button>
      <div class="login_box">
        <img class="i" src={require("./logor.png")} alt="Company Logo" />

        <GLogin response={response} />
        <LoginFB />
      </div>
    </div>
  );
}

export default Loginpage;
