import LoginFB from "./FBAuth";
import GLogin from "./GAuth";
import { useNavigate } from "react-router-dom";
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
    

    console.log(res, "G Auth in Login Page");
    console.log(localStorage.getItem("login"),"JHOOO AFTER");
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
        <img class="i" src={require("./logor.png")} alt="Company Logo" />

        <GLogin response={Response}/>
        <LoginFB />
      </div>
    </div>
  );
}

export default Loginpage;
