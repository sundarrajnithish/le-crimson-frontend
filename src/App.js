// CSS Files
import './App.css';

// Imports
import React from 'react'
import Loginpage from './components/login-page/Loginpage';
import { Routes, Route } from "react-router-dom";
import Homepages from './components/home-page/Homepages';
import PreferencePage from './components/preferences/PreferencePage';
import Contact from './components/contact/contactpage';
import AboutUsPage from './components/about/AboutUsPage';
import Profile from './components/profile/profilepage'
import Search from './components/search/searchpage'

// import Bootstrap from "./components/news-bootstrap/bootstrap"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Homepages />} />
        <Route path="/preferences" element={<PreferencePage />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/boot" element={<Bootstrap />} /> */}
        </Routes>
  
    </>
  );
}

export default App;
