import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const GLogin = (props) => {
  /*ClientId from google developer*/
  const clientId =
    "666977553987-56dgqhtbsrsbvppadjlhajohjjqq5kkr.apps.googleusercontent.com";

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);

  const responseGoogle = (response) => {
    console.log(response);
    props.response(response);
  };

  const Success = (res) => {
    console.log("Hello" + res.profileObj);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        theme="filled_blue"
        onSuccess={Success}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GLogin;
