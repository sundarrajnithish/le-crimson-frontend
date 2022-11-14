// import logo from './logo.svg';
// import './App.css';
import "./App.css";
import Landingpage from "./Landingpage";
import Loginpage from "./Loginpage";
import React from "react";
import { Routes, Route } from "react-router-dom";

// import Header from "./components/common/header/Header"

// import Footer from "./footer"

import Homepages from "./components/home/Homepages"

import AboutUs from "./AboutUs"

import Preferences from "./PreferencePage"

function App() {
  return (
    <div class="container">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/home" element={<Homepages />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/preferences" element={<Preferences />} />
        {/* <Route path="/preference" element={<PreferencePage />} /> */}
      </Routes>
      {/* <Footer /> */}
      </div>
    
  );
}

export default App;
