import React, { useState, useEffect } from "react";
import GLogin from "../google-login/GAuth";

import Footer from "../common/footer/footer";

import "./Login.css"

function Loginpage() {
  const [stateAuth, setStateAuth] = useState();
  
  const Response = (res) => {
    localStorage.setItem('login-data', JSON.stringify(res));
    console.log(JSON.parse(localStorage.getItem("login-data"))," *GAuth in Local Storage");
  };
   const [res, setValue] = useState([]);
    useEffect(() => {
      localStorage.setItem('login-data', JSON.stringify(res));
    }, [res]);
  
  // let navigate = useNavigate();
  // const route = () => {
  //   let path = `/Preference`;
  //   navigate(path);
  // };

  return (
    <div className="container-L">
      <div className="login_box">
        <img className="i" src={require("./logo.png")} alt="Company Logo" />
        <GLogin response={Response}/>
      </div>
<Footer />
    </div>
  );
}

export default Loginpage;
