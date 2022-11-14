import React, { useState } from "react"
import Head from "./Head"
import "./header.module.css"
import { Link } from "react-router-dom"

import Footer from "../footer/Footer"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              {/* <li>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
              <button className='barIcon' onClick={() => setNavbar(!navbar)} />
              </li> */}
              
              <li>

              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/sports'>News</Link>
              </li>
              <li>
                <Link to='/culture'>Social</Link>
              </li>
              <li>
                <Link to='/preferences'>Preferences</Link>
              </li>
              <li>
                <Link to='/AboutUs'>About Us</Link>
              </li>
              <li>
                <Link to='/memes'>Contact Us</Link>
              </li>
              <ul>
              <div className="searchbar">
                <input type='text' placeholder="Search..." style = {{width:"800px", height:"25px"}} />
              </div>
              </ul>
            </ul>
             
            
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
