import React from "react";
import "./FB.css";
import FacebookLogin from "react-facebook-login";

const LoginFB = () => {
  /*AppId from facebook developer site*/
  const appId = "1444025512747202";

  const componentClicked = (data) => {
    console.log("data", data);
  };
  const responseFacebook = (response) => {
    console.log(response);
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
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

export default LoginFB;
