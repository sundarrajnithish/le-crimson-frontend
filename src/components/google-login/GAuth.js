import React, { useEffect } from "react";

import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
// import { CometChat } from "@cometchat-pro/chat";

// import * as CONSTANTS from "../constants/constants";

function GLogin(props) {

  /*ClientId from google developer*/
  const clientId = "666977553987-56dgqhtbsrsbvppadjlhajohjjqq5kkr.apps.googleusercontent.com";

      /*To navigate to loginpage from landing page*/
      let navigate = useNavigate();

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);

  const SuccessresponseGoogle = (response) => {
    console.log(response, "Success Response");
    props.response(response);
    let path = `/login_process`;
    navigate(path)


    // const authKey = CONSTANTS.AUTH_KEY;
    // const uid = "user1";

    // CometChat.login(uid, authKey).then(
    //   (user) => {
    //     console.log("Login Successful:", { user });
    //   },
    //   (error) => {
    //     console.log("Login failed with exception:", { error });
    //   }
    // );
  }

  const FailureresponseGoogle = (response) => {
    console.log(response, "Failure Response");
    props.response(response);
    // let path = `/login`;
    // navigate(path)
  }


  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        theme="filled_blue"
        onSuccess={SuccessresponseGoogle} 
        onFailure={FailureresponseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GLogin;
