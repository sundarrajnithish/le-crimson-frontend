// import logo from './logo.svg';
// import './App.css';
import "./App.css";
import Landingpage from "./Landingpage";
import Loginpage from "./Loginpage";
import React from "react";
import { Routes, Route } from "react-router-dom";

// import Header from "./components/common/header/Header"



import Homepages from "./components/home/Homepages"

function App() {
  return (
    <div class="container">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/home" element={<Homepages />} />
        {/* <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/preference" element={<PreferencePage />} /> */}
      </Routes>
      </div>
    
  );
}

export default App;
