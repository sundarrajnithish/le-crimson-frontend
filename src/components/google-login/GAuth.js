import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

import { useNavigate } from "react-router-dom";

// function Sender(response1){
//   const [response1, setValue] = useState([]);
//   useEffect(() => {
//     localStorage.setItem('login', JSON.stringify(response1));
//   }, [response1]);
//   return(
// <></>

//   )
    
// };


function GLogin(props) {

  
  /*ClientId from google developer*/
  const clientId =
    "666977553987-56dgqhtbsrsbvppadjlhajohjjqq5kkr.apps.googleusercontent.com";

      /*To navigate to loginpage from landing page*/
      let navigate = useNavigate();

      

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);



  const successresponseGoogle = (response) => {
    console.log(response);
    props.response(response);
    let response1 = response
    // Sender(response1)
    let path = `/home`;
    navigate(path)
  }

  const failureresponseGoogle = (response) => {
    console.log(response);
    props.response(response);
    let path = `/login`;
    navigate(path)
  }



  
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        theme="filled_blue"
        onSuccess={successresponseGoogle} 
        onFailure={failureresponseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GLogin;
