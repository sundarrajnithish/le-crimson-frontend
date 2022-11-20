import LoginFB from "../facebook-login/FBAuth";
import GLogin from "../google-login/GAuth";
// import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Login.css"


  


function Loginpage() {
  const [stateAuth, setStateAuth] = useState();
  
  const Response = (res) => {
    localStorage.setItem('login', JSON.stringify(res));
    

    // const [res, setValue] = useState([]);
    // useEffect(() => {
    //   localStorage.setItem('login', JSON.stringify(res));
    // }, [res]);
    

    console.log(res, "GAuth Received Data");
    console.log(localStorage.getItem("login")," *GAuth in Local Storage");
  };
   const [res, setValue] = useState([]);
    useEffect(() => {
      localStorage.setItem('login', JSON.stringify(res));
    }, [res]);
  
  // let navigate = useNavigate();
  // const route = () => {
  //   let path = `/Preference`;
  //   navigate(path);
  // };

  return (
    <div class="container-L">
      {/* <button onClick={route}>preferencetrial</button> */}
      <div class="login_box">
        <img class="i" src={require("./logo.png")} alt="Company Logo" />

        <GLogin response={Response}/>
        <LoginFB />
      </div>
    </div>
  );
}

export default Loginpage;
