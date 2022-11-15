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

import AboutUs from "./AboutUsPage"

import Preferences from "./PreferencePage"

import Contact from "./components/contact/contactpage"

import Temp from "./temp"

import Profile from "./components/profile/profilepage"

import Search from "./components/search/searchpage"

import Business from "./businesspage"

function App() {
  return (
    <div class="container">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/home" element={<Homepages />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lol" element={<Temp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/business" element={<Business />} />
        <Route path="/world" element={<Business />} />
        <Route path="/sports" element={<Business />} />
        <Route path="/politics" element={<Business />} />
        <Route path="/health" element={<Business />} />
        <Route path="/local" element={<Business />} />
        <Route path="/science" element={<Business />} />
        <Route path="/technology" element={<Business />} />
        <Route path="/entertainment" element={<Business />} />
        {/* <Route path="/preference" element={<PreferencePage />} /> */}
      </Routes>
      {/* <Footer /> */}
      </div>
    
  );
}

export default App;
