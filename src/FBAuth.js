import React from "react";
import "./FB.css";

import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

const LoginFB = () => {
  /*AppId from facebook developer site*/
  const appId = "1444025512747202";
  let navigate = useNavigate();

  const componentClicked = (data) => {
    console.log("data", data);
  };
  const responseFacebook = (response) => {
    console.log(response);
    console.log(
      "Name: " +
        response.name +
        " Email: " +
        response.email +
        " source " +
        response.graphDomain
    );

    let path = `/home`;
    navigate(path);
  };
  const responseFacebookFail = (response) => {
    //console.log("Login Failed : " + response);
    let path = `/`;
    navigate(path);
  };

  return (
    /*From react-facebook-login package*/
    <div>
      <FacebookLogin
        appId={appId}
        autoLoad={false}
        textButton="Sign in with Facebook"
        cssClass="facebook-button"
        icon="fa-facebook-official"
        fields="name,email,picture,graphDomain"
        onClick={componentClicked}
        callback={responseFacebook}
        onFailure={responseFacebookFail}
      />
    </div>
  );
};

export default LoginFB;
